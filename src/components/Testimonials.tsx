import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

const testimonials = [
  {
    quote: "We always talk about human centered design but never about working with human values.",
    author: "Conversation Designer",
    image: "/face_portraits/face1.png",
  },
  {
    quote: "Using it gives you a huge awareness and alertness for values… we had our value glasses on.",
    author: "Conversational AI Consultant",
    image: "/face_portraits/face2.png",
  },
  {
    quote: "We could really go through and see which values we've considered and where, and then make changes as needed.",
    author: "Co-Founder",
    image: "/face_portraits/face3.png",
  },
  {
    quote: "I'm confident the team is more aware of our values and of the things that they could do or not do to affect these values.",
    author: "Conversational AI User",
    image: "/face_portraits/face4.png",
  },
  {
    quote: "My values were really shining through during the whole process.",
    author: "Conversational AI User",
    image: "/face_portraits/face5.png",
  },
  {
    quote: "How AI makes you feel connected or isolated… this has completely reframed the way I look at AI.",
    author: "Conversational AI Developer",
    image: "/face_portraits/face6.png",
  },
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={index === 0 ? "lg:col-span-2 xl:col-auto" : ""}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  — {testimonial.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
