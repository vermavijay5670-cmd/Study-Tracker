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
      <PageShell>
        <DashboardSection />
      </PageShell>
    </>
  );
}
