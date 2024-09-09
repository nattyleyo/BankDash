import {
  faCheck,
  faDotCircle,
  faPen,
  faTimesSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ProgressComp({ currentStep }: { currentStep: any }) {
  const totalSteps = 3;
  const menuStep = [
    "Basic Information",
    "Address Information",
    "Personal Information",
  ];

  // Helper to determine if the circle should be active or not
  const isActive = (step: number) => step <= currentStep;

  return (
    <div className="progress-box relative flex xxs:flex-row xxs:items-center xxs:justify-center xs:flex-row md:flex-col  md:items-start justify-center xxs:gap-[22%] md:gap-12">
      <div className="vert-line xxs:h-[2px] xxs:w-full md:h-[208px] md:w-[2px] z-0 xxs:bg-gradient-to-r md:bg-gradient-to-b from-white to-blue-800 rounded-3xl absolute xxs:left-0 md:left-[19px]"></div>
      {[...Array(totalSteps)].map((_, index) => {
        const step = index + 2;
        return (
          <button
            key={step}
            disabled
            className={`circle z-20 font-semibold xxs:h-8 xxs:w-8 md:h-10 md:w-10 text-lg flex items-center justify-center rounded-full ${
              isActive(step)
                ? "bg-blue-800 text-white border-gray-50"
                : "bg-white text-blue-950 border-white"
            } border-2 border-solid`}
            // onClick={() => setCurrentStep(step)}
          >
            <FontAwesomeIcon
              icon={isActive(step) ? faCheck : faDotCircle}
              className={
                isActive(step) ? "text-white font-semibold" : "text-blue-900"
              }
            />
          </button>
        );
      })}
    </div>
  );
}
