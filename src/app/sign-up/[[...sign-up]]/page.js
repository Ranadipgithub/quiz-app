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

