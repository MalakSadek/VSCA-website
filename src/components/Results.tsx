import React from "react";
import { Container } from "@/components/Container";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const Results = () => {
  const results = [
    "Users felt that the prototypes professionals created were 50% better aligned with the intended values and 60% better aligned with their own values, compared to a control prototype.",
    "Technical and non-technical professionals involved were able to use the outcomes directly in their workflows.",
    "Users and other stakeholders involved were able to express their values and felt confident they were understood and incorporated.",
  ];

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl dark:text-white mb-4">
          The best part? It actually works!
        </h2>
        <p className="text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300 mb-8">
          We gave the VSCA Framework & Toolkit to professionals building conversational AI to use. These people included conversation designers, chatbot developers, product managers, and everything in between. They also came from one-person teams in small start-ups all the way to working with massive teams in multinationals like Amazon.
        </p>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
          In ALL cases:
        </p>
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-lg leading-normal text-gray-700 dark:text-gray-300">
                {result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

