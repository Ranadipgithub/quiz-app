"use client";

import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { container, item } from "@/lib/animations";
import { upcomingQuizzes } from "../../data/upcomingQuizzes.js";
import { exploreQuizzes } from "../../data/exploreQuizzes.js";
import Link from "next/link.js";
import { QuizConfigContext } from "@/context";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const { quizConfig, setQuizConfig } = useContext(QuizConfigContext);

  const handleSelectQuiz = (quiz) => {
    setQuizConfig({
      noOfQuestions: "10", 
      difficulty: "Medium", 
      time: "5", 
      type: quiz.type,
    });
    setOpen(true); 
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Quizzes Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Upcoming Quizzes
              </h1>
              <p className="text-gray-600 dark:text-zinc-400 text-lg">
                Challenge yourself with our latest quizzes
              </p>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {upcomingQuizzes.map((quiz, index) => (
              <motion.div key={index} variants={item}>
                <Card className="group bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 dark:hover:border-yellow-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-gray-900 dark:text-white">
                      <span>{quiz.title}</span>
                      <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-yellow-500">
                        {quiz.type}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-zinc-500">
                      {quiz.difficulty} Difficulty
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
                        <Calendar className="text-yellow-500" size={18} />
                        <p className="text-sm">{quiz.startTime}</p>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
                        <Clock className="text-yellow-500" size={18} />
                        <p className="text-sm">{quiz.duration}</p>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
                        <Users className="text-yellow-500" size={18} />
                        <p className="text-sm">
                          {quiz.participants} participants
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                      Join Quiz
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Explore Our Quizzes Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Explore Our Quizzes
            </h1>
            <p className="mt-1 text-gray-600 dark:text-zinc-400 text-lg">
              Test your knowledge in various topics
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {exploreQuizzes.map((quiz, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 dark:hover:border-yellow-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
                    <quiz.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <CardTitle className="flex justify-between items-center text-gray-900 dark:text-white">
                    <span>{quiz.title}</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-yellow-500">
                      {quiz.type}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-zinc-500">
                    {quiz.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-zinc-300">
                    {quiz.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => handleSelectQuiz(quiz)}
                        className="w-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500  hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        Start Quiz
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Customize Your Quiz</DialogTitle>
                      <DialogDescription>
                        Select your quiz preferences below.
                      </DialogDescription>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="noOfQuestions"
                            className="block text-sm font-medium text-gray-700 dark:text-zinc-300"
                          >
                            Number of Questions
                          </label>
                          <Input
                            type="number"
                            min="5"
                            max="50"
                            id="noOfQuestions"
                            value={quizConfig.noOfQuestions}
                            onChange={(e) =>
                              setQuizConfig({
                                ...quizConfig,
                                noOfQuestions: parseInt(e.target.value),
                              })
                            }
                            className="mt-1 w-full"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="difficulty"
                            className="block text-sm font-medium text-gray-700 dark:text-zinc-300"
                          >
                            Difficulty
                          </label>
                          <Select
                            id="difficulty"
                            value={quizConfig.difficulty}
                            onValueChange={(value) =>
                              setQuizConfig({
                                ...quizConfig,
                                difficulty: value,
                              })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Easy">Easy</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="Hard">Hard</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700 dark:text-zinc-300"
                          >
                            Time Limit (minutes)
                          </label>
                          <Input
                            type="number"
                            id="time"
                            min="5"
                            max="120"
                            value={quizConfig.time}
                            onChange={(e) =>
                              setQuizConfig({
                                ...quizConfig,
                                time: parseInt(e.target.value),
                              })
                            }
                            className="mt-1 w-full"
                          />
                        </div>
                        
                        <div className="flex justify-end mt-4">
                          <Link href={"/quiz"}>
                            <Button>Generate Quiz</Button>
                            
                          </Link>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
