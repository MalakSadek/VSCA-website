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
              But what if you could build great conversational AI that your users and stakeholders feel represents them and their values?
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

