import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function PlannerPage() {
  return (
    <DashboardBackground>
      <PageShell wide>
        <PlannerSection />
      </PageShell>
    </DashboardBackground>
  );
}
