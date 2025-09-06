/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from "react";
import discoveryImg from "../assets/allimg/Group 77.svg";
import strategyImg from "../assets/allimg/Group 77.svg";
import executionImg from "../assets/allimg/Group 77.svg";
import optimizationImg from "../assets/allimg/Group 77.svg";
import reportingImg from "../assets/allimg/Group 77.svg";
import StepCard from "./StepCard";
import OurprOcess from "./ourprocess";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Audit",
    description:
      "In the discovery and audit phase, we analyze your goals, funnel, and competitors to shape an effective marketing website strategy.",
    image: discoveryImg,
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description:
      "KPIs, targeting, and full-funnel mapping guide strategic planning by aligning goals, identifying audiences, and optimizing each customer journey stage.",
    image: strategyImg,
  },
  {
    id: 3,
    title: "Execution",
    description:
      "Our expert team brings your strategy to life through seamless implementation across all digital touchpoints and marketing channels.",
    image: executionImg,
  },
  {
    id: 4,
    title: "Optimization",
    description:
      "Continuous monitoring and data-driven optimization ensure peak performance and maximum ROI from your marketing investments.",
    image: optimizationImg,
  },
  {
    id: 5,
    title: "Reporting & Scaling",
    description:
      "Comprehensive reporting and strategic scaling initiatives drive sustainable growth and long-term business success.",
    image: reportingImg,
  },
];

export const StackingCards: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(
          "Intersection entries:",
          entries.map((e) => ({
            id: e.target.getAttribute("data-card-id"),
            isIntersecting: e.isIntersecting,
            ratio: e.intersectionRatio,
          }))
        );

        // Find all intersecting entries
        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.1
        );

        if (intersectingEntries.length > 0) {
          // Sort by intersection ratio and get the most visible one
          const mostVisible = intersectingEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );

          const cardId = parseInt(
            mostVisible.target.getAttribute("data-card-id") || "1"
          );
          console.log("Setting active step to:", cardId);
          setActiveStep(cardId);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (stepId: number) => {
    const targetCard = cardRefs.current[stepId - 1];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="lg:min-h-screen bg-gradient-soft py-[50px] lg:py-[80px] ">
      {/* Header */}
      <div className="text-center p-[20px] md:p-[50px] lg:p-[80px] ">
        <h1 className="text-5xl font-bold mb-6 text-[#000]">Our Process</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive approach to digital transformation that delivers
          measurable results.
        </p>
      </div>

      <div className="px-[20px] mt-[40px] lg:hidden ">
        <OurprOcess />
      </div>

      {/* Main Content */}
      <div className="lg:flex max-w-7xl mx-auto px-4 hidden">
        {/* Left Navigation */}
        <div className="w-80 flex-shrink-0 sticky top-20 h-fit">
          <nav className="space-y-2">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => scrollToStep(step.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                  activeStep === step.id
                    ? "bg-card shadow-custom border-l-4 border-primary"
                    : "hover:bg-card/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`process-number text-sm ${
                      activeStep === step.id ? "scale-110" : "opacity-60"
                    } transition-all duration-300`}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3
                      className={`font-semibold transition-colors duration-300 ${
                        activeStep === step.id
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {activeStep === step.id && (
                      <div className="h-1 w-12 bg-gradient-primary rounded-full mt-2 animate-scale-in" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* Right Stacking Cards */}
        <div className="flex-1 ml-12" ref={containerRef}>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                ref={(el: any) => (cardRefs.current[index] = el)}
                data-card-id={step.id}
                className="sticky-card bg-[#cdcdcd] rounded-[12px] shadow-md "
                style={{
                  top: `${80 + index * 20}px`,
                  zIndex: index + 1,
                }}
              >
                <StepCard
                  number={step.id}
                  description={step.description}
                  image={step.image}
                />

                {/* <div className="stacking-card min-h-[500px] flex items-center">
                  <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                    
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="process-number text-lg">{step.id}</div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  
                    <div className="flex-shrink-0">
                      <div className="relative w-96 h-72 rounded-2xl overflow-hidden shadow-custom">
                        <img
                          src={step.image}
                          alt={`${step.title} illustration`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>

          {/* Spacer for proper scrolling */}
          {/* <div className="has-[]:" /> */}
        </div>
      </div>
    </div>
  );
};
