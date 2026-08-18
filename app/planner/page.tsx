import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function PlannerPage() {
  return (
    <KineticGrid>
      <PageShell>
        <PlannerSection />
      </PageShell>
    </KineticGrid>
  );
}
