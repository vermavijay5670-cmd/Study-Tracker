import { Suspense } from "react";
import { LiquidBackdrop } from "@/components/ui/LiquidBackdrop";
import { AuthForm } from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <>
      <LiquidBackdrop variant="today" />
      <Suspense>
        <AuthForm mode="login" />
      </Suspense>
    </>
  );
}
