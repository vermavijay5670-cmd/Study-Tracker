import { PageShell } from "@/components/ui/PageShell";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { SectionBackground } from "@/components/ui/SectionBackground";

export default function DashboardPage() {
  return (
    <SectionBackground>
      <PageShell>
        <DashboardSection />
      </PageShell>
    </SectionBackground>
  );
}
