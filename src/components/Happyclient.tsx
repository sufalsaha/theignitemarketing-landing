import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import imge1 from "../assets/icon/c7d739abbc1e3b8fd27617ce21a2a5df4140dc18.jpg";
import googleImg from "../assets/icon/image 821.svg";
import ster from "../assets/icon/star-fill.svg";
import googleImg1 from "../assets/icon/image 359.svg";
import MaryamArif from "../assets/review/unnamed (1).png";
import AlyanKhan from "../assets/review/unnamed (2).png";
import zain from "../assets/review/unnamed.png";

import "swiper/css";
import "swiper/css/free-mode";

// import "./styles.css";

export default function HappyClient() {
  const reviews = [
    {
      cname: "Eman Fatima",
      role: "",
      img: "",
      masg: "Excellent Services.Reliable. 100% to be recommended. I would definitely use their clearance services again.",
    },
    {
      cname: "Independent Pakistan ",
      role: "",
      img: "",
      masg: "Best service from ignitemarketing. 24 hours backup support.  I really appreciate and satisfied from there work and enthusiasm.",
    },
    {
      cname: "Independent Pakistan ",
      role: "",
      img: "",
      masg: "Best service from ignitemarketing. 24 hours backup support.  I really appreciate and satisfied from there work and enthusiasm.",
    },
    {
      cname: "Alyan Khan ",
      role: "",
      img: AlyanKhan,
      masg: "They provide quality services They are doing good job",
    },
    {
      cname: "Misbah Bashir ",
      role: "",
      img: "",
      masg: "Good service Authentic and reliable",
    },
    {
      cname: "Mechal Ghouri",
      role: "",
      img: "",
      masg: "Good quality service 👍 Reliable …",
    },
    {
      cname: "Ywar Abbas",
      role: "",
      img: "",
      masg: "Good job highly recommend",
    },
    {
      cname: "Meerab Ghouri",
      role: "",
      img: "",
      masg: "Good quality",
    },
    {
      cname: "zain",
      role: "",
      img: zain,
      masg: "Best Digital Marketing company.Highly Recommended",
    },
    {
      cname: "Maryam Arif",
      role: "",
      img: MaryamArif,
      masg: "Good quality",
    },
    {
      cname: "085-Sawera Nadeem",
      role: "",
      img: "",
      masg: "Good quality",
    },
  ];

  return (
    <section className="flex justify-center bg-[#F9F9F9]">
      <div className="max-w-[1440px] w-full overflow-hidden ">
        <div className="px-[20px] md:px-[50px] py-[80px] xl:px-[112px] lg:py-[112px]">
          <div className=" ">
            <div className="flex flex-col xl:flex-row justify-between gap-[60px] ">
              <div className="max-w-[393px] flex-shrink-0 ">
                <h2 className="text-[48px] font-semibold text-[#2E3138] leading-[64px]  ">
                  Happy Client Stories
                </h2>
                <p className="text-[16px] font-normal text-[#5F6572] leading-[24px] mt-[20px] ">
                  Hear What Our Customers Have to Say About Our Data Analysis
                  Services and Their Impact on
                </p>

                <div className="mt-[40px] flex flex-col gap-[12px] ">
                  <div className="flex items-center gap-[8px] ">
                    <p className="text-[18px] font-normal text-[#2E3138] leading-[28px]  ">
                      Review on
                    </p>
                    <div className="flex gap-[6px] ">
                      <img
                        src={ster}
                        alt="ster"
                        className="w-[20px] h-[20px] "
                      />
                      <img
                        src={ster}
                        alt="ster"
                        className="w-[20px] h-[20px] "
                      />
                      <img
                        src={ster}
                        alt="ster"
                        className="w-[20px] h-[20px] "
                      />
                      <img
                        src={ster}
                        alt="ster"
                        className="w-[20px] h-[20px] "
                      />
                      <img
                        src={ster}
                        alt="ster"
                        className="w-[20px] h-[20px] "
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px] ">
                    <img
                      src={googleImg1}
                      alt="googleImg1"
                      className=" w-[82px] "
                    />
                    <div className="flex items-center gap-[3px]  ">
                      <p>4.5</p>
                      <p>(23 reviews)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex-1 ">
                <Swiper
                  slidesPerView={2.8}
                  spaceBetween={30}
                  freeMode={true}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.1,
                      spaceBetween: 16,
                      slidesOffsetBefore: 16,
                    },
                    640: {
                      slidesPerView: 1.1,
                      spaceBetween: 20,
                      slidesOffsetBefore: 20,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 24,
                      slidesOffsetBefore: 24,
                    },
                    1024: {
                      slidesPerView: 2.1,
                      spaceBetween: 28,
                      slidesOffsetBefore: 24,
                    },
                    1280: {
                      slidesPerView: 2.8,
                      spaceBetween: 32,
                      slidesOffsetBefore: 24,
                    },
                  }}
                  modules={[FreeMode, Autoplay]}
                  className="mySwiper w-full "
                >
                  {reviews.map((e, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="p-[32px] bg-[#fff] border border-[#EBEBEB] rounded-[16px] shadow-md mb-2 flex flex-col justify-between h-full min-h-[300px]  ">
                          <p className="text-[18px] font-normal text-[#2E3138] leading-[28px] ">
                            {e.masg}
                          </p>
                          <div className="flex justify-between gap-[10px] mt-[40px] ">
                            <div className="flex items-center gap-[16px] ">
                              {e.img ? (
                                <>
                                  <img
                                    src={e.img}
                                    alt="imge1"
                                    className="w-[56px] h-[56px] rounded-full "
                                  />
                                </>
                              ) : (
                                <>
                                  <div className="rounded-full bg-[#AB47BC] w-[56px] h-[56px] flex justify-center items-center ">
                                    {e.cname[0]}
                                  </div>
                                </>
                              )}

                              <div className="flex flex-col gap-[4px] ">
                                <h3 className="text-[18px] font-semibold text-[#2E3138] leading-[28px] ">
                                  {e.cname}
                                </h3>
                                <p className="text-[16px] font-normal text-[#5F6572] leading-[24px] ">
                                  {e.role}
                                </p>
                              </div>
                            </div>
                            <img src={googleImg} alt="googleImg" />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}

                  {/* <SwiperSlide>
                    <div className="p-[32px] bg-[#fff] border border-[#EBEBEB] rounded-[16px] shadow-md ">
                      <p className="text-[18px] font-normal text-[#2E3138] leading-[28px] ">
                        had an amazing experience with The Ignite Marketing for
                        our business setup! They really went above and beyond to
                        guide us through every step. Their team was incredibly
                        professional and responsive, ........
                      </p>
                      <div className="flex justify-between gap-[10px] mt-[40px] ">
                        <div className="flex items-center gap-[16px] ">
                          <img
                            src={imge1}
                            alt="imge1"
                            className="w-[56px] h-[56px] rounded-full "
                          />
                          <div className="flex flex-col gap-[4px] ">
                            <h3 className="text-[18px] font-semibold text-[#2E3138] leading-[28px] ">
                              Wade Warren
                            </h3>
                            <p className="text-[16px] font-normal text-[#5F6572] leading-[24px] ">
                              Software Manager
                            </p>
                          </div>
                        </div>
                        <img src={googleImg} alt="googleImg" />
                      </div>
                    </div>
                  </SwiperSlide>
             */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
