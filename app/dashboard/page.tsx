import { PageShell } from "@/components/ui/PageShell";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";

export default function DashboardPage() {
  return (
    <SoftBackground>
      <PageShell>
        <DashboardSection />
      </PageShell>
    </SoftBackground>
  );
}
