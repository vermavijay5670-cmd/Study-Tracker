import { PageShell } from "@/components/ui/PageShell";
import { DailyGoalsSection } from "@/components/daily-goals/DailyGoalsSection";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function DailyGoalsPage() {
  return (
    <KineticGrid>
      <PageShell>
        <DailyGoalsSection />
      </PageShell>
    </KineticGrid>
  );
}
