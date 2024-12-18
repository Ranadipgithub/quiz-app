"use server";

import connectToDB from "@/database";
import Question from "@/models/questions";
import { NextResponse } from "next/server";
import data from "../app/data.js"

export async function fetchQuestionsAction() {
  await connectToDB();
  try {
    const questionsDB = await Question.find({});
    if (questionsDB) {
      return NextResponse.json({
        success: true,
        data: JSON.parse(JSON.stringify(questionsDB)),
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Some error occurred! Please try again.",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Some error occurred! Please try again.",
    });
  }
}

export async function addQuestionsAction(){
    await connectToDB();
    try{
        await Question.deleteMany();
        await Question.insertMany(data);
        return NextResponse.json({
          success: true,
          message: "Questions added successfully!",
        });

    } catch(err){
        console.log(err);
        return NextResponse.json({
            success: false,
            message: "Some error occurred! Please try again!"
        })
    }
}
