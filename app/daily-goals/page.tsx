import { PageShell } from "@/components/ui/PageShell";
import { DailyGoalsSection } from "@/components/daily-goals/DailyGoalsSection";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";

export default function DailyGoalsPage() {
  return (
    <SoftBackground>
      <PageShell>
        <DailyGoalsSection />
      </PageShell>
    </SoftBackground>
  );
}
