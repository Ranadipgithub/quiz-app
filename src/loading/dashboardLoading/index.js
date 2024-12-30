const DashboardLoading = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Quizzes Section Skeleton */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <div className="bg-gray-300 dark:bg-zinc-700 animate-pulse h-8 w-48 rounded-md"></div>
              </h1>
              <div className="text-gray-600 dark:text-zinc-500 text-lg">
                <div className="bg-gray-300 dark:bg-zinc-700 animate-pulse h-4 w-64 rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 animate-pulse p-4 rounded-md"
              >
                <div className="mb-4">
                  <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-32 rounded-md mb-2"></div>
                  <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-24 rounded-md"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
                    <div className="bg-gray-300 dark:bg-zinc-700 h-5 w-5 rounded-full animate-pulse"></div>
                    <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-32 rounded-md animate-pulse"></div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
                    <div className="bg-gray-300 dark:bg-zinc-700 h-5 w-5 rounded-full animate-pulse"></div>
                    <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-32 rounded-md animate-pulse"></div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-zinc-300">
                    <div className="bg-gray-300 dark:bg-zinc-700 h-5 w-5 rounded-full animate-pulse"></div>
                    <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-32 rounded-md animate-pulse"></div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="bg-gray-300 dark:bg-zinc-700 h-10 w-full rounded-md animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Our Quizzes Section Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              <div className="bg-gray-300 dark:bg-zinc-700 animate-pulse h-8 w-48 rounded-md"></div>
            </h1>
            <div className="mt-1 text-gray-600 dark:text-zinc-400 text-lg">
              <div className="bg-gray-300 dark:bg-zinc-700 animate-pulse h-4 w-64 rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 animate-pulse p-4 rounded-md"
            >
              <div className="w-12 h-12 bg-gray-300 dark:bg-zinc-700 rounded-lg mb-4"></div>
              <div className="mb-4">
                <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-32 rounded-md mb-2"></div>
                <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-24 rounded-md"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-48 rounded-md animate-pulse"></div>
                <div className="bg-gray-300 dark:bg-zinc-700 h-4 w-48 rounded-md animate-pulse"></div>
              </div>
              <div className="mt-4">
                <div className="bg-gray-300 dark:bg-zinc-700 h-10 w-full rounded-md animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardLoading;
