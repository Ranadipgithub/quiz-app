import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative -mt-12">
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#000",
              fontFamily: "Inter, sans-serif",
            },
          }}
        />
      </div>
    </div>
  );
}

// "use client"
// import { SignIn, useUser } from "@clerk/nextjs";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function SignInPage() {
//   const { user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       const userRole = user.publicMetadata.role; // Get role from public metadata
//       if (userRole === "admin") {
//         router.push("/admin");
//       } else if (userRole === "student") {
//         router.push("/quiz");
//       } else {
//         router.push("/"); // Default fallback if no role is set
//       }
//     }
//   }, [user, router]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/30">
//       <div className="w-full max-w-md px-8 py-12">
//         <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>
//         <SignIn
//           appearance={{
//             variables: {
//               colorPrimary: "hsl(240, 100%, 50%)",
//               fontFamily: "Inter, sans-serif",
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }
