"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

export default function QuizLoading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Generating Questions...
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Progress
            value={progress}
            className="w-[80%] sm:w-[60%] lg:w-[50%] mx-auto"
          />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Please wait while we prepare the questions for you!
        </motion.p>
      </motion.div>
    </div>
  );
}
