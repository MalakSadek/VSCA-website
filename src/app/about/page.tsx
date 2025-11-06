import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function About() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          preTitle="About"
          title="Research-Backed 🤝🏻 Practice-Based"
        />
        
        <div className="mt-10 space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            The VSCA framework was born out of a Ph.D. project at Imperial College London. Originally, the work was about making conversational AI more human-centred. As the project went on, one idea that kept coming up repeatedly was whether the project's outcomes would make concrete and measurable 'real-world' impact. With the goal of avoiding being just another thesis put on a shelf, the VSCA Framework was born to bridge the gap between research and practice.
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
                    className="text-lg font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
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
  );
}

