"use client";

import { useState } from "react";
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

export default function DisplayQuiz({ questionList }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isNext, setIsNext] = useState(true); // Track if it's the next question (for animation direction)

  const currentQuestion = questionList[currentQuestionIndex];

  const handleAnswer = (selectedOption) => {
    setAnswers((prev) => {
      // Toggle option on double-click
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
    setIsNext(true); // Set direction to forward
    setCurrentQuestionIndex((prev) => prev + 1);
    setShowHint(false);
  };

  const handlePrev = () => {
    setIsNext(false); // Set direction to backward
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
  };

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-10 max-w-3xl mx-auto text-center shadow-xl">
            <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              🎉 Congratulations! 🎉
            </h1>
            <p className="text-2xl mb-6 dark:text-gray-300">
              Your final score is:
            </p>
            <motion.p
              className="text-5xl font-bold text-green-600 dark:text-green-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {score}
            </motion.p>
            <Button
              className="bg-black dark:bg-white dark:text-black text-white text-lg px-8 py-4 rounded-md shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6"
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
    <div className="container mx-auto px-6 py-12">
      <Card className="p-8 max-w-3xl mx-auto shadow-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {questionList.length}
            </span>
            <span className="text-lg font-semibold dark:text-gray-300">
              Score: {score}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {currentQuestion.question}
          </h2>
        </motion.div>

        {/* Options */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentQuestionIndex}-${isNext}`} // Use both currentQuestionIndex and isNext as the key
            initial={isNext ? { x: 50, opacity: 0 } : { x: -50, opacity: 0 }} // Direction based on isNext
            animate={{ x: 0, opacity: 1 }}
            exit={isNext ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }} // Exit direction based on isNext
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {currentQuestion.options.map((option, index) => {
              const isSelected = answers[currentQuestionIndex] === option;
              return (
                <Button
                  key={index}
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full justify-start text-lg text-left transition-all ${
                    isSelected
                      ? "text-white dark:text-black font-bold"
                      : "dark:text-gray-200"
                  }`}
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
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {currentQuestion.hint}
            </p>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <Button variant="outline" onClick={handleHint} disabled={showHint}>
            Show Hint (-5 points)
          </Button>
          <div className="space-x-3">
            {currentQuestionIndex > 0 && (
              <Button onClick={handlePrev}>Previous</Button>
            )}
            {currentQuestionIndex < questionList.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Submit</Button>
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
