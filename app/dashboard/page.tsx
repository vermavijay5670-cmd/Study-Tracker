import { PageShell } from "@/components/ui/PageShell";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function DashboardPage() {
  return (
    <KineticGrid>
      <PageShell>
        <DashboardSection />
      </PageShell>
    </KineticGrid>
  );
}
