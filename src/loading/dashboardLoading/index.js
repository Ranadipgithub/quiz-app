import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

function DashboardLoading() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Quizzes Section Skeleton */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <Skeleton className="w-40 h-8" />
              </h1>
              <p className="text-gray-600 dark:text-zinc-500 text-lg">
                <Skeleton className="w-64 h-6" />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg mb-4">
                    <Skeleton className="w-6 h-6 mx-auto my-auto" />
                  </div>
                  <Skeleton className="h-6 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="w-32 h-4" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="w-full h-10" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Explore Our Quizzes Section Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              <Skeleton className="w-40 h-8" />
            </h1>
            <p className="mt-1 text-gray-600 dark:text-zinc-400 text-lg">
              <Skeleton className="w-64 h-6" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800"
            >
              <CardHeader>
                <Skeleton className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg mb-4" />
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="w-full h-10" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DashboardLoading;
