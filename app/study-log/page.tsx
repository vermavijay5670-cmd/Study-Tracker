import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import MovingGrid from "@/components/ui/hyper-grid";

export default function PlannerPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* MovingGrid background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <MovingGrid />
      </div>

      {/* Planner content */}
      <div className="relative z-10">
        <PageShell>
          <PlannerSection />
        </PageShell>
      </div>
    </div>
  );
}