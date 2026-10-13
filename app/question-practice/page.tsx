import { PageShell } from "@/components/ui/PageShell";
import { QuestionPracticeSection } from "@/components/question-practice/QuestionPracticeSection";
import { DashboardBackground } from "@/components/dashboard/DashboardBackground";

export default function QuestionPracticePage() {
  return (
    <DashboardBackground>
      <PageShell wide>
        <QuestionPracticeSection />
      </PageShell>
    </DashboardBackground>
  );
}
