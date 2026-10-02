import { PageShell } from "@/components/ui/PageShell";
import { QuestionPracticeSection } from "@/components/question-practice/QuestionPracticeSection";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";

export default function QuestionPracticePage() {
  return (
    <SoftBackground>
      <PageShell>
        <QuestionPracticeSection />
      </PageShell>
    </SoftBackground>
  );
}
