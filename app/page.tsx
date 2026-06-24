import { HomeExperience } from "@/components/creative/HomeExperience";
import { Hero } from "@/components/sections/Hero";
import { ServicesHighlight } from "@/components/sections/ServicesHighlight";
import { WhyIncoquinita } from "@/components/sections/WhyIncoquinita";
import { MethodologyPreview } from "@/components/sections/MethodologyPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <HomeExperience>
      <Hero />
      <ServicesHighlight />
      <WhyIncoquinita />
      <MethodologyPreview />
      <SocialProof />
      <CtaFinal />
    </HomeExperience>
  );
}
