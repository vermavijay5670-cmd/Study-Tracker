import { PageShell } from "@/components/ui/PageShell";
import { MarkYourDaysSection } from "@/components/mark-your-days/MarkYourDaysSection";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";

export default function MarkYourDaysPage() {
  return (
    <SoftBackground>
      <PageShell>
        <MarkYourDaysSection />
      </PageShell>
    </SoftBackground>
  );
}
