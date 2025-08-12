// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
export default function HeroSection() {
  const main = useRef<HTMLDivElement | null>(null);
  //   const smoother = useRef<ScrollSmoother | null>(null);

  //   useGSAP(() => {
  // gsap.to(main.current, {
  //   scrollTrigger: {
  //     trigger: ".box",
  //     start: "top 40%",
  //     end: "bottom 20%",
  //     scrub: true,
  //     markers: true, // debug korar jonno
  //   },
  //   y: 1000,
  //   duration: 2,
  //   delay: 1,
  //   ease: "none",
  // });
  // create the smooth scroller FIRST!
  //   smoother.current = ScrollSmoother.create({
  //     smooth: 2, // seconds it takes to "catch up" to native scroll position
  //     effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //   });
  //   ScrollTrigger.create({
  //     trigger: ".box-c",
  //     pin: true,
  //     start: "center center",
  //     end: "3000",
  //     markers: true,
  //   });
  //   });

  //   useEffect(() => {
  //     if (!scrollRef.current) return;

  //     const boxes = gsap.utils.toArray<HTMLElement>(scrollRef.current.children);

  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         scrollTrigger: {
  //           trigger: box,
  //           start: "top 40%",
  //           end: "bottom 20%",
  //           scrub: true,
  //           markers: true, // debug korar jonno
  //         },
  //         y: 150,
  //         rotation: 360,
  //         borderRadius: "100%",
  //         // scale: 1.5,
  //         ease: "none",
  //       });
  //     });

  //     // Cleanup on unmount
  //     return () => {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //       gsap.globalTimeline.clear();
  //     };
  //   }, []);

  return (
    <section className="flex justify-center bg-[#F8E7F1]">
      <div className="max-w-[1440px] w-full overflow-visible">
        <div className="px-[80px]">
          <div
            ref={main}
            className="  h-screen flex flex-col justify-center items-center  "
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white shadow-md text-[16px] font-400 text-[#DE5EA3] mb-[16px] ">
              <span className="w-2 h-2 bg-[#DE5EA3] rounded-full mr-2"></span>
              Welcome to TheIgniteMarketing
            </div>

            {/* Heading */}
            <h1 className="text-[72px] font-bold text-gray-900 leading-[90px]">
              Grow Into <span className="ml-2">Market Leader</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="flex justify-center items-center gap-[6px] px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#fff] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-105 transition ">
                <img src="../assets/icon/chat-smile-2-fill.svg" alt="chat" />
                Free Strategy Call
              </button>
              <button className="flex justify-center items-center gap-[6px] px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#5F6572] bg-white shadow-lg hover:scale-105 transition border border-gray-200">
                <img src="../assets/icon/image 76.svg" alt="image" />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-[341px] " data-speed="1.5">
            <div className="relative">
              <div className="flex flex-col justify-center items-center ">
                <div className="max-w-[831px] flex flex-col justify-center items-center">
                  <h1 className="text-[72px] font-bold text-[#121212] leading-[90px] text-center">
                    Ignite Sales. Build Brands.{" "}
                    <span className="bg-gradient-to-r from-[#EC4699] via-[#9234EA] to-[#07B9D5] bg-clip-text text-transparent">
                      Maximize ROI.
                    </span>
                  </h1>
                  <p className="max-w-[664px] text-[20px] font-normal text-[#5F6572] leading-[28px] text-center mt-[14px]">
                    Ignite Marketing helps Dubai brands grow online using paid
                    ads, automation, content strategies, and conversion tactics
                    with measurable results.
                  </p>
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
              <div className="absolute top-[-140px] left-[200px]">
                <img
                  src="../assets/image/Background+Shadow (2).png"
                  alt="Background"
                  className="w-[236px] h-[140px] "
                />
              </div>
              <div className="absolute top-[35px] left-[20px]">
                <img
                  src="../assets/image/image 850 (1).png"
                  alt="Background"
                  className="w-[210px] h-[228px] "
                />
              </div>
              <div className="absolute bottom-[40px] left-[110px]">
                <img
                  src="../assets/image/image 851.svg"
                  alt="Background"
                  className="w-[236px] h-[179px] "
                />
              </div>
              <div className="absolute top-[-140px] right-[160px]">
                <img
                  src="../assets/image/Background+Shadow (1).jpg"
                  alt="Background"
                  className="w-[205px] h-[138px] "
                />
              </div>
              <div className="absolute top-[60px] right-[40px]">
                <img
                  src="../assets/image/business-consultant-side-1 (1).png"
                  alt="Background"
                  className="w-[192px] h-[162px] "
                />
              </div>
              <div className="absolute bottom-[100px] right-[60px]">
                <img
                  src="../assets/image/Background+Shadow (2).png"
                  alt="Background"
                  className="w-[236px] h-[140px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
