import Header from "../header";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { currentUser } from "@clerk/nextjs/server";
// import QuizConfigProvider from "@/context";

export default async function CommonLayout({ children }) {
  const user = await currentUser();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <QuizConfigProvider> */}
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          {/* Header Component */}
          <Header user={JSON.parse(JSON.stringify(user))} />
          {/* Header Component */}

          {/* Main Content */}
          <main>{children}</main>
          <Toaster />
          {/* Main Content */}
        </div>
      {/* </QuizConfigProvider> */}
    </ThemeProvider>
  );
}
