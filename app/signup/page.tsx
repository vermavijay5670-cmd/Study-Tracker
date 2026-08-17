import { Suspense } from "react";
import KineticGrid from "@/components/ui/kinetic-grid";
import { AuthForm } from "@/components/auth/AuthForm";

export default function SignupPage() {
  return (
    <KineticGrid>
      <Suspense>
        <AuthForm mode="signup" />
      </Suspense>
    </KineticGrid>
  );
}
