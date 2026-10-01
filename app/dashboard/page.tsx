import { PageShell } from "@/components/ui/PageShell";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function DashboardPage() {
  return (
    <DashboardBackground>
      <PageShell>
        <DashboardSection />
      </PageShell>
    </DashboardBackground>
  );
}
