import { PageShell } from "@/components/ui/PageShell";
import { PlannerSection } from "@/components/planner/PlannerSection";
import { SectionBackground } from "@/components/ui/SectionBackground";

export default function PlannerPage() {
  return (
    <SectionBackground>
      <PageShell>
        <PlannerSection />
      </PageShell>
    </SectionBackground>
  );
}
