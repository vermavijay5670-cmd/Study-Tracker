import { PageShell } from "@/components/ui/PageShell";
import { StudyLogSection } from "@/components/study-log/StudyLogSection";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function StudyLogPage() {
  return (
    <KineticGrid>
      <PageShell>
        <StudyLogSection />
      </PageShell>
    </KineticGrid>
  );
}
