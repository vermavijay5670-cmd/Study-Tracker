import { Suspense } from "react";
import { LiquidBackdrop } from "@/components/ui/LiquidBackdrop";
import { SetPasswordForm } from "@/components/auth/SetPasswordForm";

export default function SetPasswordPage() {
  return (
    <>
      <LiquidBackdrop variant="today" />
      <Suspense>
        <SetPasswordForm />
      </Suspense>
    </>
  );
}
