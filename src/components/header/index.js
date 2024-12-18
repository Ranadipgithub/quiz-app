"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useClerk } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@clerk/nextjs";

export default function Header({user}) {
  const { setTheme } = useTheme();
  const { signOut } = useClerk();

  return (
    <header className="flex h-16 w-full items-center justify-between px-6 border-b shadow-sm  dark:border-gray-800 transition-colors duration-300">
      <Link
        href={"/"}
        className="text-2xl font-bold text-black dark:text-white"
      >
        Quiz App
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        {/* Mode Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="z-[9999] dark:bg-gray-800 dark:text-white"
          >
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sign In and Sign Up */}
        {!user ? (
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-lg font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="text-lg font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <UserButton onClick={() => signOut({ redirectUrl: "/" })} />
        )}
      </nav>
    </header>
  );
}
