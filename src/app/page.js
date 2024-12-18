import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center -mt-12  transition-colors duration-300">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <h1 className="text-5xl font-extrabold text-black dark:text-white">
          Welcome to the{" "}
          <span className="text-gray-700 dark:text-gray-300">Quiz App</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Challenge yourself with our interactive quiz. Each correct answer
          earns you
          <span className="font-semibold text-black dark:text-white">
            {" "}
            +10 points
          </span>
          , but using hints costs you
          <span className="font-semibold text-black dark:text-white">
            {" "}
            -5 points
          </span>
          !
        </p>
      </div>

      {/* Points Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-lg">
        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
            <Zap size={28} className="text-black dark:text-yellow-400" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
              Correct Answer
            </h3>
            <p className="text-black dark:text-white font-bold">+10 Points</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
            <Lightbulb size={28} className="text-black dark:text-yellow-300" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
              Using Hint
            </h3>
            <p className="text-black dark:text-white font-bold">-5 Points</p>
          </div>
        </div>
      </div>

      {/* Start Quiz Button */}
      <div>
        <Link href={"/quiz"}>
          <Button className="bg-black dark:bg-white dark:text-black text-white text-lg px-8 py-4 rounded-md shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform transform hover:scale-105">
            Start Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}
