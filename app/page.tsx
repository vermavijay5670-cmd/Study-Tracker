import { MedicalBackdrop } from "@/components/landing/MedicalBackdrop";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProfileForm } from "@/components/landing/ProfileForm";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <>
      <MedicalBackdrop />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <ProfileForm />
      <LandingFooter />
    </>
  );
}
