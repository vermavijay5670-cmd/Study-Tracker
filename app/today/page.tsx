import { PageShell } from "@/components/ui/PageShell";
import { TodaySection } from "@/components/today/TodaySection";
import { TodayBackground } from "@/components/today/TodayBackground";

export default function TodayPage() {
  return (
    <TodayBackground>
      <PageShell>
        <TodaySection />
      </PageShell>
    </TodayBackground>
  );
}
