import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import MovingGrid from "@/components/ui/kinetic-grid";

export default function PlannerPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <MovingGrid showTitle={false} forceDark />
      </div>
      <PageShell>
        <PlannerSection />
      </PageShell>
    </>
  );
}
