/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react-hooks/rules-of-hooks */
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   // type CarouselApi,
// } from "@/components/ui/carousel";
// import StepCard from "./StepCard";
// // import step from "../assets/image/Group 77 (1).svg";
// // import stepOne from "../assets/image/image 830.png";
// import stepTwo from "../assets/image/image 852.png";
// import { useRef } from "react";
// // import { useState } from "react";
// // import stepThere from "../assets/image/image 853.png";
// // import stepFoer from "../assets/image/image 854.png";

// const elementRef = useRef<HTMLDivElement>(null);

// export default function WorkingProcess() {
//   // const [api, setApi] = useState<CarouselApi>();
//   return (
//     <section className="flex justify-center bg-[#fff]">
//       <div className="max-w-[1440px] w-full ">
//         <div className="px-[112px] py-[112px] flex flex-col gap-[30px]">
//           <div>
//             <div className="mt-[68px] md:hidden">
//               <Carousel
//                 opts={{ loop: true }}
//                 // setApi={setApi}
//                 plugins={[
//                   Autoplay({
//                     delay: 5000,
//                     stopOnFocusIn: false,
//                     stopOnInteraction: false,
//                     stopOnMouseEnter: true,
//                   }),
//                 ]}
//               >
//                 <CarouselContent>
//                   <CarouselItem>
//                     <div className=" w-[100%] sticky top-[120px] bg-[#fff] dark:bg-[#0D1825]">
//                       <div className=" flex flex-col gap-[24px] ">
//                         <StepCard
//                           number={3}
//                           description={
//                             "Execution means turning plans into action. It involves organizing tasks, managing resources, and ensuring goals are completed efficiently and successfully."
//                           }
//                           image={stepTwo}
//                         />
//                       </div>
//                     </div>
//                   </CarouselItem>
//                 </CarouselContent>
//                 {/* <CarouselPrevious variant={"link"} />
//           <CarouselNext variant={"link"} /> */}
//               </Carousel>
//               {/* <div className="flex items-center justify-center gap-2 mt-[20px]">
//                 {Array.from({ length: count }).map((_, i) => (
//                   <div
//                     key={i}
//                     className={clsx("transition-all rounded-full", {
//                       "w-[8px] xl:w-[12px] h-[8px] xl:h-[12px] bg-[#EBEBEB] dark:bg-[#3D4651]":
//                         current != i,
//                       "w-[12px] xl:w-[16px] h-[12px] xl:h-[16px] bg-[#5779F0] dark:bg-[#7792F3]":
//                         current == i,
//                     })}
//                   ></div>
//                 ))}
//               </div> */}
//             </div>
//             <div className="hidden md:block  mt-[80px]">
//               <div
//                 ref={elementRef}
//                 className=" relative flex flex-col justify-center items-center"
//               >
//                 {/* <div className="absolute w-[16px] h-full z-10  bg-[#EBEBEB] dark:bg-[#202A36] rounded-[20px] md:left-[45%] lg:left-[40%] ">
//                     <div
//                       className="bg-[#F5AB0C] w-[16px] h-[233px] rounded-[20px] sticky"
//                       style={{ top: position || 0 }}
//                     ></div>
//                   </div> */}
//                 {/* <div className=" w-[100%] sticky top-[120px] bg-[#fff] dark:bg-[#0D1825]">
//                     <div className="flex md:justify-center md:gap-[80px] lg:justify-between  ">
//                       <div className="w-[311px] flex flex-col gap-[19px] ">
//                         <p className="text-[#F5AB0C] text-[18px] font-medium leading-[135%]">
//                           STEP 01
//                         </p>
//                         <h4 className="text-[#2E3138] dark:text-[#FFFFFF]  text-[40px] font-bold leading-[54px]">
//                           Strategy Development
//                         </h4>
//                       </div>
//                       <div className="md:w-[350px] xl:w-[558px] md:flex md:flex-col md:gap-[16px] ">
//                         <div className="flex  gap-[10px]">
//                           <div className="bg-[#54565C] dark:bg-[#FFFFFF] h-[1px] w-[1px] p-[5px] rounded-full  mt-[8px] "></div>
//                           <p className="text-[#5F6572] dark:text-[#888E9B] text-[18px] font-medium leading-[135%]">
//                             <strong className="text-[#2E3138] dark:text-[#FFFFFF]">
//                               Goal Setting:{" "}
//                             </strong>
//                             Clearly define short-term and long-term objectives
//                             to align with overall business goals.
//                           </p>
//                         </div>
//                         <div className="flex  gap-[10px] ">
//                           <div className="bg-[#54565C] dark:bg-[#FFFFFF] h-[1px] w-[1px] p-[5px] rounded-full  mt-[8px] "></div>
//                           <p className="text-[#5F6572] dark:text-[#888E9B] text-[18px] font-medium leading-[135%]">
//                             <strong className="text-[#2E3138] dark:text-[#FFFFFF]">
//                               Market Analysis:{" "}
//                             </strong>
//                             Research industry trends, competitors, and customer
//                             needs to identify opportunities and challenges.
//                           </p>
//                         </div>
//                         <div className="mt-[8px]">
//                           <Image
//                             src={steps1}
//                             alt="steps1 "
//                             className=" h-[259px]"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div> */}

//                 <div className="w-[100%] pt-[80px]  sticky top-[120px] bg-[#fff] dark:bg-[#0D1825]">
//                   <div className="flex md:justify-center md:gap-[80px] lg:justify-between   ">
//                     <StepCard
//                       number={3}
//                       description={
//                         "Execution means turning plans into action. It involves organizing tasks, managing resources, and ensuring goals are completed efficiently and successfully."
//                       }
//                       image={stepTwo}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="flex gap-[50px] ">
//               <div className="w-[500px] ">
//                 <div className="flex flex-col space-y-6 relative">

//                   <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>

//                   {steps.map((step, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center space-x-4 relative"
//                     >
//                       <div
//                         className="w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white z-10
//             transition-all duration-300
//             border-gray-300"
//                       >
//                         <div
//                           className={`w-2 h-2 rounded-full ${
//                             step.active ? "bg-pink-500" : "bg-gray-500"
//                           }`}
//                         ></div>
//                       </div>
//                       <p
//                         className={`font-semibold ${
//                           step.active ? "text-pink-500" : "text-gray-600"
//                         }`}
//                       >
//                         {step.title}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-[30px]">
//                 <StepCard
//                   number={1}
//                   description={
//                     "In the discovery and audit phase, we analyze your goals, funnel, and competitors to shape an effective marketing website strategy."
//                   }
//                   image={step}
//                 />
//                 <StepCard
//                   number={2}
//                   description={
//                     "KPIs, targeting, and full-funnel mapping guide strategic planning by aligning goals, identifying audiences, and optimizing each customer journey stage."
//                   }
//                   image={stepOne}
//                 />
//                 <StepCard
//                   number={3}
//                   description={
//                     "Execution means turning plans into action. It involves organizing tasks, managing resources, and ensuring goals are completed efficiently and successfully."
//                   }
//                   image={stepTwo}
//                 />
//                 <StepCard
//                   number={4}
//                   description={
//                     "Optimization works by improving a process or system to achieve the best results with minimal effort, time, or resources efficiently."
//                   }
//                   image={stepThere}
//                 />
//                 <StepCard
//                   number={5}
//                   description={
//                     "Reporting and scaling help businesses track performance, identify growth opportunities, optimize resources, and expand efficiently using accurate data insights."
//                   }
//                   image={stepFoer}
//                 />
//               </div>
//             </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import discoveryImg from "@/assets/image/Group 77.svg";
import strategyImg from "@/assets/image/Group 77.svg";
import executionImg from "@/assets/image/Group 77.svg";
import optimizationImg from "@/assets/image/Group 77.svg";
import reportingImg from "@/assets/image/Group 77.svg";
import StepCard from "./StepCard";

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
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-6 text-[#000]">Our Process</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive approach to digital transformation that delivers
          measurable results.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto px-4">
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
