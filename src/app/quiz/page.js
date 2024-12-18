import { addQuestionsAction, fetchQuestionsAction } from "@/actions";
import DisplayQuiz from "@/components/quiz-page";

export default async function QuizPage() {
  await addQuestionsAction();
  const response = await fetchQuestionsAction();
  const questionList = await response.json();
//   console.log(questionList);

  return (
    <div>
      <DisplayQuiz questionList={questionList.data} />
    </div>
  );
}
