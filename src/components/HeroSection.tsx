import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const endTriggerRef = useRef<HTMLDivElement | null>(null);
  const upboxRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);
  const box3Ref = useRef<HTMLDivElement | null>(null);
  const box4Ref = useRef<HTMLDivElement | null>(null);
  const box5Ref = useRef<HTMLDivElement | null>(null);
  const box6Ref = useRef<HTMLDivElement | null>(null);

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
          if (upboxRef.current) {
            upboxRef.current.style.opacity = `${(1 - self.progress).toFixed(
              3
            )}`;
          }
          if (boxRef.current) {
            boxRef.current.style.opacity = `${self.progress.toFixed(3)}`;
            // boxRef.current.style.transform = `rotate(${
            //   (1 / self.progress) * 90
            // }deg)`;
            // boxRef.current.style.transition = "transform 0.5s ease";
          }
          if (box1Ref.current) {
            box1Ref.current.style.opacity = `${self.progress.toFixed(3)}`;
          }
          if (box2Ref.current) {
            box2Ref.current.style.opacity = `${self.progress.toFixed(3)}`;
          }
          if (box3Ref.current) {
            box3Ref.current.style.opacity = `${self.progress.toFixed(3)}`;
          }
          if (box4Ref.current) {
            box4Ref.current.style.opacity = `${self.progress.toFixed(3)}`;
          }
          if (box5Ref.current) {
            box5Ref.current.style.opacity = `${self.progress.toFixed(3)}`;
          }
          if (box6Ref.current) {
            box6Ref.current.style.opacity = `${self.progress.toFixed(3)}`;
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
    <section className="flex justify-center bg-[#F8E7F1]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[80px] ">
          <div className="h-screen " ref={triggerRef}>
            <div className="w-full h-full flex  justify-center items-center ">
              <div className="relative flex justify-center w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="w-full h-full">
                    <div className="relative w-full ">
                      <div
                        ref={upboxRef}
                        className="w-full flex flex-col justify-center items-center absolute top-[130px] "
                      >
                        <div className="inline-flex items-center px-4 py-1 rounded-full bg-white shadow-md text-[16px] font-400 text-[#DE5EA3] mb-[16px] ">
                          <span className="w-2 h-2 bg-[#DE5EA3] rounded-full mr-2"></span>
                          Welcome to TheIgniteMarketing
                        </div>

                        <h1 className=" text-[72px] font-bold text-gray-900 leading-[90px] text-center">
                          Grow Into <span className="ml-2">Market Leader</span>
                        </h1>
                      </div>

                      <div
                        ref={boxRef}
                        className=" flex flex-col justify-center items-center opacity-0   "
                      >
                        <h1 className="max-w-[831px] text-[72px] font-bold text-[#121212] leading-[90px] text-center">
                          Ignite Sales. Build Brands.{" "}
                          <span className="bg-gradient-to-r from-[#EC4699] via-[#9234EA] to-[#07B9D5] bg-clip-text text-transparent">
                            Maximize ROI.
                          </span>
                        </h1>
                        <p className="max-w-[664px] text-[20px] font-normal text-[#5F6572] leading-[28px] text-center mt-[14px]">
                          Ignite Marketing helps Dubai brands grow online using
                          paid ads, automation, content strategies, and
                          conversion tactics with measurable results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 mt-[48px] mb-[150px] ">
                    <button className="flex justify-center items-center gap-[6px] px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#fff] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-105 transition ">
                      <img
                        src="../assets/icon/chat-smile-2-fill.svg"
                        alt="chat"
                      />
                      Free Strategy Call
                    </button>
                    <button className="flex justify-center items-center gap-[6px] px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#5F6572] bg-white shadow-lg hover:scale-105 transition border border-gray-200">
                      <img src="../assets/icon/image 76.svg" alt="image" />
                      WhatsApp
                    </button>
                  </div>
                </div>
                <div
                  ref={box1Ref}
                  className="absolute top-[-140px] left-[200px] opacity-0"
                >
                  <img
                    src="../assets/image/Background+Shadow (2).png"
                    alt="Background"
                    className="w-[236px] h-[140px] "
                  />
                </div>
                <div
                  ref={box2Ref}
                  className="absolute top-[35px] left-[20px] opacity-0"
                >
                  <img
                    src="../assets/image/image 850 (1).png"
                    alt="Background"
                    className="w-[210px] h-[228px] "
                  />
                </div>
                <div
                  ref={box3Ref}
                  className="absolute bottom-[40px] left-[110px] opacity-0"
                >
                  <img
                    src="../assets/image/image 851.svg"
                    alt="Background"
                    className="w-[236px] h-[179px] "
                  />
                </div>
                <div
                  ref={box4Ref}
                  className="absolute top-[-140px] right-[160px] opacity-0"
                >
                  <img
                    src="../assets/image/Background+Shadow (1).jpg"
                    alt="Background"
                    className="w-[205px] h-[138px] "
                  />
                </div>
                <div
                  ref={box5Ref}
                  className="absolute top-[60px] right-[40px] opacity-0"
                >
                  <img
                    src="../assets/image/business-consultant-side-1 (1).png"
                    alt="Background"
                    className="w-[192px] h-[162px] "
                  />
                </div>
                <div
                  ref={box6Ref}
                  className="absolute bottom-[100px] right-[60px] opacity-0"
                >
                  <img
                    src="../assets/image/Background+Shadow (2).png"
                    alt="Background"
                    className="w-[236px] h-[140px] "
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={endTriggerRef}
            style={{
              height: "0px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
