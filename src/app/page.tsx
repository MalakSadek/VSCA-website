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
    <>
      {/* Hero Section - White background, light in dark mode */}
      <div className="bg-white dark:bg-trueGray-800 py-8 lg:py-12">
        <Hero />
      </div>

      {/* First Benefits Section - Primary (blue) background, dark in dark mode */}
      <div className="bg-primary-50 dark:bg-trueGray-900 py-8 lg:py-12">
        <Benefits data={benefitOne} />
      </div>

      {/* Second Benefits Section - Accent (orange) background, light in dark mode */}
      <div className="bg-accent-50 dark:bg-trueGray-800 py-8 lg:py-12">
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      {/* Results Section - Primary (blue) background, dark in dark mode */}
      <div className="bg-primary-50 dark:bg-trueGray-900 py-8 lg:py-12">
        <Results />
      </div>

      {/* Video Section - Accent (orange) background, light in dark mode */}
      <div className="bg-accent-50 dark:bg-trueGray-800 py-8 lg:py-12">
        <SectionTitle
          preTitle="Hear from the creator"
          title="Learn more about the VSCA Framework"
          preTitleColor="accent"
        >
          Watch this video to hear from the creator about the VSCA Framework and Toolkit.
        </SectionTitle>
        <Video videoId="-l0LG22nTSQ" />
      </div>

      {/* Testimonials Section - Primary (blue) background, dark in dark mode */}
      <div className="bg-primary-50 dark:bg-trueGray-900 py-8 lg:py-12">
        <SectionTitle
          preTitle="Testimonials"
          title="Here's what professionals said"
          preTitleColor="accent"
        >
          Professionals who used the VSCA Framework & Toolkit share their experiences.
        </SectionTitle>
        <Testimonials />
      </div>

      {/* CTA Section - White background, light in dark mode */}
      <div className="bg-white dark:bg-trueGray-800 py-8 lg:py-12">
        <Cta />
      </div>
    </>
  );
}
