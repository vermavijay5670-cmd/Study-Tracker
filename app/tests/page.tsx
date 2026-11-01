import { PageShell } from "@/components/ui/PageShell";
import { SubjectWiseTests } from "@/components/subject-tests/SubjectWiseTests";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function TestsPage() {
  return (
    <DashboardBackground>
      <PageShell wide>
        <SubjectWiseTests />
      </PageShell>
    </DashboardBackground>
  );
}
