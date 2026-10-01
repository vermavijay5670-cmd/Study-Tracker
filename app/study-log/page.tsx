import { PageShell } from "@/components/ui/PageShell";
import { StudyLogSection } from "@/components/study-log/StudyLogSection";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";

export default function StudyLogPage() {
  return (
    <SoftBackground>
      <PageShell>
        <StudyLogSection />
      </PageShell>
    </SoftBackground>
  );
}
