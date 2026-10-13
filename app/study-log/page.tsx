import { PageShell } from "@/components/ui/PageShell";
import { StudyLogSection } from "@/components/study-log/StudyLogSection";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function StudyLogPage() {
  return (
    <DashboardBackground>
      <PageShell wide>
        <StudyLogSection />
      </PageShell>
    </DashboardBackground>
  );
}
