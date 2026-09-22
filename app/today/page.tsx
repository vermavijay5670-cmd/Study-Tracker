import { CrumpledPaperBackdrop } from "@/components/ui/CrumpledPaperBackdrop";
import { PageShell } from "@/components/ui/PageShell";
import { TodaySection } from "@/components/today/TodaySection";

export default function TodayPage() {
  return (
    <>
      <CrumpledPaperBackdrop />
      <PageShell>
        <TodaySection />
      </PageShell>
    </>
  );
}
