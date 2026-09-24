import { PageShell } from "@/components/ui/PageShell";
import { DailyGoalsSection } from "@/components/daily-goals/DailyGoalsSection";
import { SectionBackground } from "@/components/ui/SectionBackground";

export default function DailyGoalsPage() {
  return (
    <SectionBackground>
      <PageShell>
        <DailyGoalsSection />
      </PageShell>
    </SectionBackground>
  );
}
