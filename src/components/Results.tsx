import React from "react";
import { Container } from "@/components/Container";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BrushStroke = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    {children}
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
  </span>
);

export const Results = () => {
  const results = [
    <>Users felt that the prototypes professionals created were <BrushStroke>50% better aligned</BrushStroke> with the intended values and <BrushStroke>60% better aligned</BrushStroke> with their own values, compared to a control prototype.</>,
    <>Technical and non-technical professionals involved were able to use the outcomes <BrushStroke>directly in their workflows</BrushStroke>.</>,
    <>Users and other stakeholders involved were able to <BrushStroke>express their values</BrushStroke> and felt confident they were <BrushStroke>understood and incorporated</BrushStroke>.</>,
  ];

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl dark:text-white mb-4">
          The best part? <span className="relative inline-block">
            It actually works!
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
          </span>
        </h2>
        <p className="text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300 mb-8">
          We gave the VSCA Framework & Toolkit to professionals building conversational AI to use. These people included conversation designers, chatbot developers, product managers, and everything in between. They also came from one-person teams in small start-ups all the way to working with massive teams in multinationals like Amazon.
        </p>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
          In <span className="relative inline-block">
            ALL
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
          </span> cases:
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

