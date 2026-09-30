import { ArrowLeft } from "lucide-react";

const HOME_URL = "https://neetstudy-tracker.lovable.app/";

export function LandingFooter() {
  return (
    <footer className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6">
      <div className="flex justify-center border-t border-white/10 pt-6">
        <a
          href={HOME_URL}
          className="flex items-center gap-1.5 text-[12.5px] font-medium text-white/45 transition-colors hover:text-white/80"
        >
          <ArrowLeft size={14} strokeWidth={1.75} />
          Go back
        </a>
      </div>
      <div className="mt-4 flex flex-col items-center justify-between gap-3 text-[12.5px] text-white/35 sm:flex-row">
        <span>Study Tracker — built for NEET UG aspirants.</span>
        <span>Your data stays on your device.</span>
      </div>
    </footer>
  );
}
