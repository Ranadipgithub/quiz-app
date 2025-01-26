import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
// import Loading from "./loading";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import CommonLayout from "../components/common-layout/index";
import QuizConfigProvider from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quizarcade",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <QuizConfigProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {/* <Suspense fallback={<Loading />}> */}
              <CommonLayout children={children} />
            {/* </Suspense> */}
          </body>
        </html>
      </ClerkProvider>
    </QuizConfigProvider>
  );
}
