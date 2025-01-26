import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const model = google("gemini-1.5-pro-latest");

export async function generateQuestions(quizConfig){
  const {noOfQuestions,difficulty,time,type} = quizConfig;
  try {
    const prompt = `
    Generate ${noOfQuestions} multiple-choice questions about ${type}.
    Difficulty: ${difficulty}.
    Return the response in valid JSON format without any additional text, such as code blocks or explanations.
    The format should look exactly like this:
    [
      {
        "question": "What is the speed of light?",
        "options": ["300,000 km/s", "150,000 km/s", "1,000 km/s", "299,792 km/s"],
        "correctAnswer": "299,792 km/s",
        "hint": "It's close to 300,000 km/s."
      },
      {
        "question": "What is the chemical symbol for water?",
        "options": ["H2O", "O2", "H2", "CO2"],
        "correctAnswer": "H2O",
        "hint": "It consists of hydrogen and oxygen."
      }
    ]
    `;

    const response = await generateText({
      model: model,
      prompt: prompt,
      maxOutputTokens: 600,
    });

    const questions = JSON.parse(response.text);
    return questions;
  } catch (error) {
    console.error("Error generating text:", error);
    return "An error occurred while generating the content.";
  }
};
