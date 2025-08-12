// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   //   gsap.to(".box", {
//   //     x: 700,
//   //     duration: 2,
//   //     scrollTrigger: ".box",
//   //   });

//   useGSAP(() => {
//     // create the smooth scroller FIRST!
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".div2",
//         start: "0% 0%",
//         end: "100% 50%",
//         markers: true,
//         scrub: 1,
//         pin: true,
//       },
//     });

//     tl.to(".box", {
//       x: 0,
//       rotate: 360,
//       duration: 4,
//       //   opacity: 0,
//       onUpdate: (self) => {
//         console.log(self);
//       },
//     });
//   });

//   return (
//     <section className="flex justify-center bg-[#F8E7F1]">
//       <div className="max-w-[1440px] w-full overflow-visible">
//         <div className="px-[80px]">
//           {/* <div className=" h-screen bg-blue-700 "></div> */}
//           <div className=" div2 h-screen bg-amber-600 flex justify-center items-center ">
//             <div className="w-[150px] h-[150px] bg-[#f80000] box "></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerExample() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const endTriggerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (triggerRef.current && endTriggerRef.current) {
      const st = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        pin: true,
        markers: true,
        endTrigger: endTriggerRef.current,
        end: "bottom",
        onToggle: (self) => {
          console.log("toggled, isActive:", self.isActive);
        },
        onUpdate: (self) => {
          if (boxRef.current) {
            boxRef.current.style.opacity = `${self.progress.toFixed(3)}`;
            // boxRef.current.style.transform = `rotate(${
            //   (1 / self.progress) * 90
            // }deg)`;
            // boxRef.current.style.transition = "transform 0.5s ease";
          }
          // boxRef.current?.style=
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      });

      return () => {
        st.kill(); // cleanup when component unmounts
      };
    }
  }, []);

  return (
    <div>
      <div
        ref={triggerRef}
        style={{
          height: "100vh",
          background: "lightblue",
        }}
      >
        <div className=" div2 h-screen bg-amber-600 flex justify-center items-center ">
          <div
            ref={boxRef}
            className="w-[150px] h-[150px] bg-[#f80000] box "
          ></div>
        </div>
      </div>
      <div
        ref={endTriggerRef}
        style={{
          height: "0px",
        }}
      ></div>
    </div>
  );
}
