import KineticGrid from "@/components/ui/kinetic-grid";
import { PageShell } from "@/components/ui/PageShell";
import { TodaySection } from "@/components/today/TodaySection";

export default function TodayPage() {
  return (
    <KineticGrid>
      <PageShell>
        <TodaySection />
      </PageShell>
    </KineticGrid>
  );
}
