"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Timer } from "lucide-react";

export default function DisplayQuiz({ questionList, time }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [remainingTime, setRemainingTime] = useState(time); // Initialize timer

  const currentQuestion = questionList[currentQuestionIndex];
  console.log(currentQuestion);
  console.log(time);

  useEffect(() => {
    if (remainingTime > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup on unmount
    }

    if (remainingTime === 0) {
      handleSubmit(); // Auto-submit when time is up
    }
  }, [remainingTime, quizCompleted]);

  const handleAnswer = (selectedOption) => {
    setAnswers((prev) => {
      if (prev[currentQuestionIndex] === selectedOption) {
        const updatedAnswers = { ...prev };
        delete updatedAnswers[currentQuestionIndex];
        return updatedAnswers;
      }
      return { ...prev, [currentQuestionIndex]: selectedOption };
    });
  };

  const handleHint = () => {
    if (!showHint) {
      setScore((prev) => prev - 5);
      setShowHint(true);
      toast("Hint Used!", {
        description: "5 points deducted for using the hint.",
      });
    }
  };

  const handleNext = () => {
    setIsNext(true);
    setCurrentQuestionIndex((prev) => prev + 1);
    setShowHint(false);
  };

  const handlePrev = () => {
    setIsNext(false);
    setCurrentQuestionIndex((prev) => prev - 1);
    setShowHint(false);
  };

  const handleSubmit = () => {
    let finalScore = score;

    questionList.forEach((question, index) => {
      const selectedAnswer = answers[index];
      if (selectedAnswer) {
        if (selectedAnswer === question.correctAnswer) {
          finalScore += 10;
        } else {
          finalScore -= 5;
        }
      }
    });

    setScore(finalScore);
    setQuizCompleted(true);
    toast("Quiz Completed!", {
      description: `Your final score is ${finalScore}`,
    });
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
    setQuizCompleted(false);
    setShowHint(false);
    setRemainingTime(time); // Reset timer
  };

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 sm:p-10 max-w-lg sm:max-w-3xl mx-auto text-center shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              🎉 Congratulations! 🎉
            </h1>
            <p className="text-xl sm:text-2xl mb-6 dark:text-gray-300">
              Your final score is:
            </p>
            <motion.p
              className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {score}
            </motion.p>
            <Button
              className="bg-black dark:bg-white dark:text-black text-white text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6"
              onClick={handleRestart}
            >
              Restart Quiz
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Card className="p-6 sm:p-8 max-w-lg sm:max-w-3xl mx-auto shadow-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <span className="text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {questionList.length}
            </span>
            <span className="text-sm sm:text-lg font-semibold dark:text-gray-300">
              Score: {score}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {currentQuestion?.question}
          </h2>
          <div
            className={`flex items-center space-x-2 text-sm sm:text-lg font-semibold ${
              remainingTime <= 60
                ? "text-red-600 dark:text-red-400" // Red when 1 minute or less
                : "text-green-600 dark:text-green-400" // Green for other times
            }`}
          >
            <Timer
              className={`h-6 w-6 ${
                remainingTime <= 60
                  ? "text-red-600 dark:text-red-400"
                  : "text-green-600 dark:text-green-400"
              }`}
            />
            <span>
              {Math.floor(remainingTime / 60)}:
              {remainingTime % 60 < 10
                ? `0${remainingTime % 60}`
                : remainingTime % 60}
            </span>
          </div>
        </motion.div>

        {/* Options */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentQuestionIndex}-${isNext}`}
            initial={isNext ? { x: 50, opacity: 0 } : { x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={isNext ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 max-w-full overflow-hidden"
          >
            {currentQuestion.options.map((option, index) => {
              const isSelected = answers[currentQuestionIndex] === option;
              return (
                <Button
                  key={index}
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full justify-start text-base sm:text-lg text-left transition-all ${
                    isSelected
                      ? "text-white dark:text-black font-bold"
                      : "dark:text-gray-200"
                  } max-w-full text-left break-words p-3`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Hint Section */}
        {showHint && (
          <motion.div
            className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300">
              {currentQuestion.hint}
            </p>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-3 sm:space-y-0">
          <Button
            variant="outline"
            onClick={handleHint}
            disabled={showHint}
            className="w-full sm:w-auto"
          >
            Show Hint (-5 points)
          </Button>
          <div className="flex space-x-3 w-full sm:w-auto">
            {currentQuestionIndex > 0 && (
              <Button onClick={handlePrev} className="w-full sm:w-auto">
                Previous
              </Button>
            )}
            {currentQuestionIndex < questionList.length - 1 ? (
              <Button onClick={handleNext} className="w-full sm:w-auto">
                Next
              </Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full sm:w-auto">Submit</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to submit?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Once you submit, you will not be able to change your
                      answers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                      Submit
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
