import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";

export default function PlannerPage() {
  return (
    <SoftBackground>
      <PageShell>
        <PlannerSection />
      </PageShell>
    </SoftBackground>
  );
}
