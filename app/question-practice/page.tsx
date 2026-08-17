import KineticGrid from "@/components/ui/kinetic-grid";
import { PageShell } from "@/components/ui/PageShell";
import { QuestionPracticeSection } from "@/components/question-practice/QuestionPracticeSection";

export default function QuestionPracticePage() {
  return (
    <KineticGrid>
      <PageShell>
        <QuestionPracticeSection />
      </PageShell>
    </KineticGrid>
  );
}
