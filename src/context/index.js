"use client";

import { createContext, useState } from "react";

// Initial state for the quiz configuration
const quizConfigInitialState = {
  noOfQuestions: 10,
  difficulty: "Medium",
  time: 30,
  type: "general",
};

// Create the context
export const QuizConfigContext = createContext(null);

// Provider component
export default function QuizConfigProvider({ children }) {
  const [quizConfig, setQuizConfig] = useState(quizConfigInitialState);

  return (
    <QuizConfigContext.Provider
      value={{
        quizConfig,
        setQuizConfig,
      }}
    >
      {children}
    </QuizConfigContext.Provider>
  );
}
