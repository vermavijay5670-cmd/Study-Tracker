import { PageShell } from "@/components/ui/PageShell";
import { StudyLogSection } from "@/components/study-log/StudyLogSection";
import { StudyLogBackground } from "@/components/study-log/StudyLogBackground";

export default function StudyLogPage() {
  return (
    <StudyLogBackground>
      <PageShell>
        <StudyLogSection />
      </PageShell>
    </StudyLogBackground>
  );
}
