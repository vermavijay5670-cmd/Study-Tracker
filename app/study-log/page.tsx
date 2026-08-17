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
      <PageShell>
        <StudyLogSection />
      </PageShell>
    </>
  );
}
