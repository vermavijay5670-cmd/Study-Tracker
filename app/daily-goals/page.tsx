import { PageShell } from "@/components/ui/PageShell";
import { DailyGoalsSection } from "@/components/daily-goals/DailyGoalsSection";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function DailyGoalsPage() {
  return (
    <DashboardBackground>
      <PageShell wide>
        <DailyGoalsSection />
      </PageShell>
    </DashboardBackground>
  );
}
