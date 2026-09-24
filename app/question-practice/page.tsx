import { PageShell } from "@/components/ui/PageShell";
import { QuestionPracticeSection } from "@/components/question-practice/QuestionPracticeSection";
import { SectionBackground } from "@/components/ui/SectionBackground";

export default function QuestionPracticePage() {
  return (
    <SectionBackground>
      <PageShell>
        <QuestionPracticeSection />
      </PageShell>
    </SectionBackground>
  );
}
