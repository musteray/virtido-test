import Intake from "@/src/components/Intake";
import Results from "@/src/components/Results";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-12 flex-wrap">
      <Intake />
      <Results />
    </main>
  );
}
