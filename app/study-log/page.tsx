import { PageShell } from "@/components/ui/PageShell";
import { StudyLogSection } from "@/components/study-log/StudyLogSection";
import MovingGrid from "@/components/ui/hyper-grid";

export default function StudyLogPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <MovingGrid>
          <></>
        </MovingGrid>
      </div>
      {/* warm gold tint so Study Log reads distinctly from Dashboard's cool tint */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-[9]"
        style={{ background: "radial-gradient(circle at 85% 15%, rgba(245,185,66,0.10) 0%, transparent 45%)" }}
      />
      <PageShell>
        <StudyLogSection />
      </PageShell>
    </>
  );
}
