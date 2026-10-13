import { PageShell } from "@/components/ui/PageShell";
import { MarkYourDaysSection } from "@/components/mark-your-days/MarkYourDaysSection";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function MarkYourDaysPage() {
  return (
    <DashboardBackground>
      <PageShell wide>
        <MarkYourDaysSection />
      </PageShell>
    </DashboardBackground>
  );
}
