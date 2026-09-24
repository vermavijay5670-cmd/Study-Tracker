import { PageShell } from "@/components/ui/PageShell";
import { StudyLogSection } from "@/components/study-log/StudyLogSection";
import { SectionBackground } from "@/components/ui/SectionBackground";

export default function StudyLogPage() {
  return (
    <SectionBackground>
      <PageShell>
        <StudyLogSection />
      </PageShell>
    </SectionBackground>
  );
}
