interface StepCardProps {
  number: number;
  description: string;
  image: string;
}

export default function StepCard({
  number,
  description,
  image,
}: StepCardProps) {
  return (
    <div className="bg-gradient-to-r min-h-[500px] flex items-center from-[#fdf5f7] to-[#f0f4fb] rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <div className="text-[80px] text-[#e2e2e2] font-bold leading-none -mb-6">
          {number}
        </div>
        <p className="text-[#374151] text-lg md:text-xl font-medium mt-2">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src={image} alt="Step illustration" className="max-w-[250px] " />
      </div>
    </div>
  );
}

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// export interface Step {
//   title: string;
//   description: string;
// }

// interface StepCardProps {
//   step: Step;
//   index: number;
//   activeStep: number;
//   setActiveStep: (index: number) => void;
// }

// export default function StepCard({
//   step,
//   index,
//   activeStep,
//   setActiveStep,
// }: StepCardProps) {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       setActiveStep(index);
//     }
//   }, [inView, index, setActiveStep]);

//   return (
//     <motion.div
//       ref={ref}
//       className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-6 rounded-2xl shadow bg-gradient-to-r from-pink-50 to-orange-50"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{
//         opacity: activeStep === index ? 1 : 0,
//         y: activeStep === index ? 0 : 50,
//         zIndex: activeStep === index ? 10 : 0,
//       }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <h3 className="text-2xl font-bold mb-2">
//         {index + 1}. {step.title}
//       </h3>
//       <p className="text-gray-600">{step.description}</p>
//     </motion.div>
//   );
// }
