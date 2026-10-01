import { PageShell } from "@/components/ui/PageShell";
import { MarkYourDaysSection } from "@/components/mark-your-days/MarkYourDaysSection";
import { GlassBackground } from "@/components/mark-your-days/GlassBackground";

export default function MarkYourDaysPage() {
  return (
    <GlassBackground>
      <PageShell>
        <MarkYourDaysSection />
      </PageShell>
    </GlassBackground>
  );
}
