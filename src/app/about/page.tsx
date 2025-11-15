import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function About() {
  return (
    <div className="bg-white dark:bg-trueGray-800 py-8 lg:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            preTitle="About"
            title="Research-Backed 🤝🏻 Practice-Based"
            preTitleColor="accent"
          />
          
          <div className="mt-10 space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              The VSCA framework was born out of a <a href="https://www.imperial.ac.uk/design-engineering/study/phd/malak/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-600 dark:text-accent dark:hover:text-accent-400 underline">Ph.D. project at Imperial College London</a>. Originally, the work was about making conversational AI more human-centred. As the project went on, one idea that kept coming up repeatedly was whether the project&apos;s outcomes would make concrete and measurable &apos;real-world&apos; impact. With the goal of avoiding being just another thesis put on a shelf, the VSCA Framework was born to <span className="relative inline-block">
                bridge the gap between research and practice
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 120 25"
                  preserveAspectRatio="none"
                  style={{ height: '8px', overflow: 'visible' }}
                >
                  <path
                    d="M 2 18 Q 15 8, 30 15 Q 45 22, 60 12 Q 75 2, 90 16 Q 105 20, 118 14"
                    stroke="#EEA947"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0 1px 1px rgba(238, 169, 71, 0.3))' }}
                  />
                </svg>
              </span>.
            </p>
            <p>
              It is based on years of research and grounded in scientific theories and findings, but it is also the result of inputs from countless conversational AI professionals who shared their experiences, struggles, and dreams.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl dark:text-white mb-8">
              Meet the Creator
            </h2>
            
            <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center">
              <div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/profile_pic.jpeg"
                    width={400}
                    height={400}
                    alt="Malak Sadek"
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap items-center w-full lg:w-1/2">
                <div>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl dark:text-white mb-2">
                    Malak Sadek, PhD
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    Researcher and Academic, Cambridge University + Imperial College London
                  </p>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      Malak created the VSCA Framework and toolkit through her work as a doctoral researcher at the Dyson School of Design Engineering at Imperial College London.
                    </p>
                    <p>
                      With a background in Computer Engineering, Human-Computer Interaction, and User-Centred Design, she experienced first-hand the divide between technical and social aspects of technology and especially AI systems.
                    </p>
                    <p>
                      Working to bridge these socio-technical divides, her work centres around inspiring technical professionals to consider broader social and ethical aspects, and helping to bring diverse and interdisciplinary voices into AI design processes.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://malaksadekapps.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-primary hover:text-primary-600 dark:text-accent dark:hover:text-accent-400"
                    >
                      Learn more about her work →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

