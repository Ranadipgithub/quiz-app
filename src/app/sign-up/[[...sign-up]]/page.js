import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative -mt-12">
          <SignUp
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
// import { SignUp, useSignUp } from "@clerk/nextjs";
// import { useEffect } from "react";

// export default function SignUpPage() {
//   const { isLoaded, signUp } = useSignUp(); // Access Clerk's SignUp object

//   useEffect(() => {
//     if (isLoaded && signUp) {
//       // Listen for successful signup completion
//       signUp.addListener("onComplete", async () => {
//         // Ask user for their role (student/admin) upon completion
//         const role = window.confirm(
//           "Are you an Admin? Click OK for Admin, Cancel for Student"
//         )
//           ? "admin"
//           : "student";

//         // Set the role in the user's public metadata
//         await signUp.update({ publicMetadata: { role } });
//       });
//     }
//   }, [isLoaded, signUp]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/30">
//       <div className="w-full max-w-md px-8 py-12">
//         <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
//         <SignUp
//           redirectUrl="/profile" // Redirect to a profile page or landing page
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
