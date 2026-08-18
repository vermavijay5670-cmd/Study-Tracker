import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import ConstellationGrid from "@/components/ui/constellation-grid";

export default function PlannerPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ConstellationGrid showTitle={false} forceDark />
      </div>
      <PageShell>
        <PlannerSection />
      </PageShell>
    </>
  );
}
