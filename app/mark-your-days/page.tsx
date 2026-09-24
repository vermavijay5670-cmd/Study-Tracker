import { PageShell } from "@/components/ui/PageShell";
import { MarkYourDaysSection } from "@/components/mark-your-days/MarkYourDaysSection";
import { SectionBackground } from "@/components/ui/SectionBackground";

export default function MarkYourDaysPage() {
  return (
    <SectionBackground>
      <PageShell>
        <MarkYourDaysSection />
      </PageShell>
    </SectionBackground>
  );
}
