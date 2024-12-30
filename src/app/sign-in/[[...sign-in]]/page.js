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
