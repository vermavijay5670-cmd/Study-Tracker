import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import MovingGrid from "@/components/ui/hyper-grid";

export default function PlannerPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <MovingGrid>
          <></>
        </MovingGrid>
      </div>
      <PageShell>
        <PlannerSection />
      </PageShell>
    </>
  );
}
