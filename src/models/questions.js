import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
});

const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;
