import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import discoveryImg from "../assets/allimg/Group 77.svg";
import strategyImg from "../assets/allimg/Group 77.svg";
import executionImg from "../assets/allimg/Group 77.svg";
import optimizationImg from "../assets/allimg/Group 77.svg";
import reportingImg from "../assets/allimg/Group 77.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

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

export default function OurprOcess() {
  return (
    <section className="">
      <div className="w-full  ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper w-full "
        >
          {processSteps.map((e, i) => {
            return (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-gradient-to-r from-[#fdf5f7] to-[#f0f4fb] rounded-lg p-[12px] md:p-10 flex flex-col items-center justify-between gap-8 border  h-[400px]">
                  {/* Text Section */}
                  <div className=" text-center md:text-left flex-1">
                    <div className="text-[80px] text-[#e2e2e2] font-bold leading-none -mb-6">
                      {e.id}
                    </div>
                    <p className="text-[#374151] text-[16px] font-medium mt-2">
                      {e.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className=" flex justify-center">
                    <img
                      src={e.image}
                      alt="Step illustration"
                      className="max-w-[250px] "
                    />
                  </div>
                </div>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
