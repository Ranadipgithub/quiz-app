"use server";

import connectToDB from "@/database";
import Question from "@/models/questions";
import { NextResponse } from "next/server";
import {generateQuestions} from "@/ai";

export async function fetchQuestionsAction(quizConfig) {
  try {
    const questionsData = await generateQuestions(quizConfig);

    const formattedQuestions = JSON.parse(JSON.stringify(questionsData));

    console.log(formattedQuestions);

    return {
      success: true,
      data: formattedQuestions, 
    };
  } catch (err) {
    console.error("Error fetching questions:", err);
    return {
      success: false,
      message: "Failed to fetch questions. Please try again.",
    };
  }
}

export async function addQuestionsAction() {
  await connectToDB();
  try {
    const questionsData = await generateQuestions();
    const formattedQuestionsData = JSON.parse(questionsData);
    console.log(formattedQuestionsData);

    if (questionsData) {
      await Question.deleteMany();
      await Question.insertMany(formattedQuestionsData);

      return NextResponse.json({
        success: true,
        message: "Questions added successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to generate questions. Please try again.",
      });
    }
  } catch (err) {
    console.error("Error adding questions:", err);
    return NextResponse.json({
      success: false,
      message: "Failed to add questions. Please try again.",
    });
  }
}
