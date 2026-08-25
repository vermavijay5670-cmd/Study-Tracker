import { PageShell } from "@/components/ui/PageShell";
import { Challenge45Section } from "@/components/challenge45/Challenge45Section";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function Challenge45Page() {
  return (
    <KineticGrid>
      <PageShell>
        <Challenge45Section />
      </PageShell>
    </KineticGrid>
  );
}
