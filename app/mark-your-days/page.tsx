import { PageShell } from "@/components/ui/PageShell";
import { MarkYourDaysSection } from "@/components/mark-your-days/MarkYourDaysSection";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function MarkYourDaysPage() {
  return (
    <KineticGrid>
      <PageShell>
        <MarkYourDaysSection />
      </PageShell>
    </KineticGrid>
  );
}
