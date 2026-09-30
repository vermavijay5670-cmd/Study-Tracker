import { TodayBackdrop } from "@/components/ui/TodayBackdrop";
import { PageShell } from "@/components/ui/PageShell";
import { TodaySection } from "@/components/today/TodaySection";

export default function TodayPage() {
  return (
    <>
      <TodayBackdrop />
      <PageShell>
        <TodaySection />
      </PageShell>
    </>
  );
}
