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
  const boxbutton = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (triggerRef.current && endTriggerRef.current) {
      const st = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        pin: true,
        // markers: true,
        endTrigger: endTriggerRef.current,
        end: "bottom",
        onToggle: (self) => {
          console.log("toggled, isActive:", self.isActive);
        },
        onUpdate: (self) => {
          if (upboxRef.current) {
            const opacity =
              self.progress > 0.5 ? 0 : ((0.5 - self.progress) * 2).toFixed(1);
            upboxRef.current.style.opacity = `${opacity}`;
            // upboxRef.current.style.opacity = `${(1 - self.progress).toFixed(
            //   1
            // )}`;
            const translateY = self.progress * -100; // negative for upward
            upboxRef.current.style.transform = `translateY(${translateY}px)`;
          }
          if (boxRef.current) {
            const opacity =
              self.progress > 0.5 ? ((self.progress - 0.5) * 2).toFixed(3) : 0;
            boxRef.current.style.opacity = `${opacity}`;
            // boxRef.current.style.opacity = `${self.progress.toFixed(3)}`;
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
          if (boxbutton.current) {
            const translateY = (100 * (1 - self.progress)).toFixed(3);
            boxbutton.current.style.transform = `translateY(${translateY}px)`;
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
        <div className=" xl:px-[80px] ">
          <div className="h-screen  " ref={triggerRef}>
            <div className="w-full h-full flex  justify-center items-center ">
              <div className="relative flex justify-center w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="w-full h-full">
                    <div className="relative w-full z-20 ">
                      <div
                        ref={upboxRef}
                        className="w-full flex flex-col justify-center items-center absolute md:top-[30px] lg:top-[130px] "
                      >
                        <div className="inline-flex items-center px-4 py-1 rounded-full bg-white shadow-md text-[16px] font-400 text-[#DE5EA3] mb-[16px] ">
                          <span className="w-2 h-2 bg-[#DE5EA3] rounded-full mr-2"></span>
                          Welcome to TheIgniteMarketing
                        </div>

                        <h1 className="w-full text-[32px] leading-[100%] md:text-[48px]  font-bold text-gray-900 xl:leading-[90px] xl:text-[72px] text-center">
                          Grow Into <span className="ml-2">Market Leader</span>
                        </h1>

                        <div className=" flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-[48px] mb-[150px] ">
                          <button className="flex justify-center items-center gap-[6px] px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#fff] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-105 transition ">
                            <img
                              src="../assets/icon/chat-smile-2-fill.svg"
                              alt="chat"
                            />
                            Free Strategy Call
                          </button>
                          <button className="flex justify-center items-center gap-[6px] px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#5F6572] bg-white shadow-lg hover:scale-105 transition border border-gray-200">
                            <img
                              src="../assets/icon/image 76.svg"
                              alt="image"
                            />
                            WhatsApp
                          </button>
                        </div>
                      </div>

                      <div
                        ref={boxRef}
                        className=" flex flex-col justify-center items-center opacity-0   "
                      >
                        <h1 className="max-w-[263px] md:max-w-[463px] lg:max-w-[831px] text-[32px] leading-[100%] md:text-[48px] font-bold text-[#121212] lg:text-[64px] lg:leading-[90px] text-center">
                          Ignite Sales. Build Brands.{" "}
                          <span className="bg-gradient-to-r from-[#EC4699] via-[#9234EA] to-[#07B9D5] bg-clip-text text-transparent">
                            Maximize ROI.
                          </span>
                        </h1>
                        <p className="max-w-[212px] md:max-w-[403px] lg:max-w-[664px] text-[6.4px] leading-[9px] md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[28px] font-normal text-[#5F6572] text-center mt-[14px]">
                          Ignite Marketing helps Dubai brands grow online using
                          paid ads, automation, content strategies, and
                          conversion tactics with measurable results.
                        </p>
                        <div
                          ref={boxbutton}
                          className="flex  flex-wrap justify-center gap-4 mt-[48px] xl:mb-[150px] "
                        >
                          <button className="flex justify-center items-center gap-[6px] px-[10px] py-[6px] md:px-[20px] md:py-[16px] rounded-[8px] font-medium text-[10px] leading-[7.67px] md:text-[18px] text-[#fff] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-105 transition ">
                            <img
                              src="../assets/icon/chat-smile-2-fill.svg"
                              alt="chat"
                            />
                            Free Strategy Call
                          </button>
                          <button className="flex justify-center items-center gap-[6px] px-[10px] py-[6px] md:px-[20px] md:py-[16px] rounded-[8px] font-medium text-[10px] leading-[7.67px] md:text-[18px] text-[#5F6572] bg-white shadow-lg hover:scale-105 transition border border-gray-200">
                            <img
                              src="../assets/icon/image 76.svg"
                              alt="image"
                              className="size-4"
                            />
                            WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap justify-center gap-4 mt-[48px] mb-[150px] ">
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
                  </div> */}
                </div>
                <div
                  ref={box1Ref}
                  className="absolute left-[40px] top-[-30px] md:left-[70px] md:top-[-60px] lg:top-[-140px] lg:left-[200px] opacity-0"
                >
                  <img
                    src="../assets/image/Background+Shadow (2).png"
                    alt="Background"
                    className="w-[76px] h-[45px] md:w-[130px] md:h-[80px] lg:w-[200px] lg:h-[140px] xl:w-[200px] xl:h-[140px] "
                  />
                </div>
                <div
                  ref={box2Ref}
                  className="absolute top-[35px] left-[20px] md:top-[45px] md:left-[40px]  opacity-0"
                >
                  <img
                    src="../assets/image/image 850 (1).png"
                    alt="Background"
                    className="w-[67px] h-[72px] md:w-[110px] md:h-[120px] lg:w-[180px] lg:h-[200px] xl:w-[210px] xl:h-[228px] "
                  />
                </div>
                <div
                  ref={box3Ref}
                  className="absolute bottom-[0px] left-[20px] lg:bottom-[-40px] lg:left-[110px] xl:bottom-[40px] xl:left-[110px] opacity-0"
                >
                  <img
                    src="../assets/image/image 851.svg"
                    alt="Background"
                    className="w-[58px] h-[79px] md:w-[180px] md:h-[120px] lg:w-[200px] lg:h-[149px] xl:w-[236px] xl:h-[179px] "
                  />
                </div>
                <div
                  ref={box4Ref}
                  className="absolute top-[-30px] right-[60px] md:top-[-60px] md:right-[70px] lg:top-[-100px] lg:right-[160px] xl:top-[-140px] xl:right-[160px] opacity-0"
                >
                  <img
                    src="../assets/image/Background+Shadow (1).jpg"
                    alt="Background"
                    className="w-[65px] h-[44px] md:w-[130px] md:h-[80px] lg:w-[180px] lg:h-[120px] xl:w-[205px] xl:h-[138px] "
                  />
                </div>
                <div
                  ref={box5Ref}
                  className="absolute top-[30px] right-[40px] md:top-[70px] md:right-[40px] lg:top-[60px] lg:right-[40px] xl:top-[60px] xl:right-[40px] opacity-0"
                >
                  <img
                    src="../assets/image/business-consultant-side-1 (1).png"
                    alt="Background"
                    className="w-[61px] h-[51px] md:w-[130px] md:h-[80px] lg:w-[192px] lg:h-[162px] xl:w-[192px] xl:h-[162px] "
                  />
                </div>
                <div
                  ref={box6Ref}
                  className="absolute bottom-[50px] right-[40px] md:bottom-[50px] md:right-[80px] lg:bottom-[0px] lg:right-[60px] xl:bottom-[100px] xl:right-[60px] opacity-0"
                >
                  <img
                    src="../assets/image/Background+Shadow (2).png"
                    alt="Background"
                    className="w-[76px] h-[51px] md:w-[130px] md:h-[80px] lg:w-[236px] lg:h-[140px] xl:w-[236px] xl:h-[140px] "
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
