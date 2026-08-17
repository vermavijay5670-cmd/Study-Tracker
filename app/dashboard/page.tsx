import { PageShell } from "@/components/ui/PageShell";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import MovingGrid from "@/components/ui/hyper-grid";

export default function DashboardPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <MovingGrid>
          <></>
        </MovingGrid>
      </div>
      {/* cool emerald/teal tint so Dashboard reads distinctly from Study Log's warm tint */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-[9]"
        style={{ background: "radial-gradient(circle at 15% 85%, rgba(52,211,153,0.22) 0%, transparent 50%)" }}
      />
      <PageShell>
        <DashboardSection />
      </PageShell>
    </>
  );
}
