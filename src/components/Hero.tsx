import Image from "next/image";
import { Container } from "@/components/Container";

const heroImg = "/Monosnap Mindmaps and Flowcharts 2023-08-24 14-42-47.jpg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12">
        <div className="flex items-center w-full lg:w-1/2 lg:pr-6">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Design Conversational AI that Aligns with People&apos;s Values
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              You already know how to build great conversational AI. 
              But what if you could build great conversational AI that your <span className="relative inline-block">
                users
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
              </span> and <span className="relative inline-block">
                stakeholders
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
              </span> feel represents them and their <span className="relative inline-block">
                values
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
              </span>?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:pl-6">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Design Conversational AI that Aligns with People&apos;s Values"
              loading="eager"
              className={"object-cover rounded-3xl"}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

