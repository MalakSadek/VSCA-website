import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Results } from "@/components/Results";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Results />
      <SectionTitle
        preTitle="Hear from the creator"
        title="Learn more about the VSCA Framework"
      >
        Watch this video to hear from the creator about the VSCA Framework and Toolkit.
      </SectionTitle>
      <Video videoId="-l0LG22nTSQ" />
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what professionals said"
      >
        Professionals who used the VSCA Framework & Toolkit share their experiences.
      </SectionTitle>
      <Testimonials />
      <Cta />
    </Container>
  );
}
