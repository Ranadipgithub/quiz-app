// import { addQuestionsAction, fetchQuestionsAction } from "@/actions";
// import DisplayQuiz from "@/components/quiz-page";
// import { useContext } from "react";
// import { QuizConfigContext } from "@/context";

// export default async function QuizPage() {
//   // await addQuestionsAction();
//   const {quizConfig} = useContext(QuizConfigContext);
//   const response = await fetchQuestionsAction(quizConfig);
//   const questionList = await response.json();
//   console.log(questionList);

//   return (
//     <div>
//       <DisplayQuiz questionList={questionList.data} />
//     </div>
//   );
// }

"use client";

import React, { useContext, useEffect, useState } from "react";
import { fetchQuestionsAction } from "@/actions"; // Import the server action
import { QuizConfigContext } from "@/context";
import DisplayQuiz from "@/components/quiz-page";
import QuizLoading from "@/loading/quizLoading";

export default function QuizPage() {
  const { quizConfig } = useContext(QuizConfigContext); // Context for quizConfig
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("quizConfig", quizConfig);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchQuestionsAction(quizConfig);
        if (result.success && Array.isArray(result.data)) {
          setQuestionList(result.data); // Update state with the questions
        } else {
          setError(result.message || "Failed to fetch questions.");
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (quizConfig) {
      fetchQuestions();
    }
  }, [quizConfig]);

  return (
    <div>
      {loading && <QuizLoading/>}

      {!loading && !error && questionList.length > 0 && (
        <DisplayQuiz questionList={questionList} time={quizConfig?.time*60}/>
      )}
      {!loading && !error && questionList.length === 0 && (
        <p>No questions available.</p>
      )}
    </div>
  );
}
