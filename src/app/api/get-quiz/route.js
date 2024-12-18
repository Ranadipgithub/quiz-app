import connectToDB from "@/database";
import Question from "@/models/questions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const questionsDB = await Question.find({});
    if (questionsDB) {
      return NextResponse.json({
        success: true,
        data: questionsDB,
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
