import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import GoogleMetaImg from "../assets/allimg/Rectangle 39844 (1).jpg";
import ConversionImg from "../assets/allimg/Rectangle 39844 (3).jpg";
import ContentImg from "../assets/allimg/Rectangle 39844 (5).jpg";
import SeoImg from "../assets/allimg/Rectangle 39844 (7).jpg";

import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideItem = {
  img: string;
  title: string;
  des: string;
  url: string;
};

export default function Selaider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const selider: SlideItem[] = [
    {
      img: GoogleMetaImg,
      title: "Digital Marketing",
      des: "Reach the right audience with full-funnel digital marketing campaigns. From social media and PPC to remarketing and funnels, our strategies increase visibility, engagement, and conversions.",
      url: "https://theignitemarketing.com/digital-marketing-services/",
    },
    {
      img: ConversionImg,
      title: "Market Research",
      des: "Make smarter decisions with deep insights. We analyze your competitors, audiences, industry trends, and customer behavior to guide your digital strategy with precision.",
      url: "https://theignitemarketing.com/market-research-services/",
    },
    {
      img: ContentImg,
      title: "Creative Layouts",
      des: "Stand out with visually compelling content. Our creative team designs modern layouts, graphics, and brand visuals that enhance your identity and capture attention.",
      url: "https://theignitemarketing.com/layout-design-services/",
    },
    {
      img: SeoImg,
      title: "SEO & Backlinks",
      des: "Boost your rankings and organic traffic with powerful SEO solutions. We provide keyword optimization, on-page SEO, link-building campaigns, and technical improvements that help your website dominate search engines.",
      url: "https://theignitemarketing.com/seo-services/",
    },
    {
      img: GoogleMetaImg,
      title: "Email Marketing",
      des: "Turn prospects into loyal customers with automated, high-conversion email flows. From newsletters to drip campaigns, we create content that drives engagement and sales.",
      url: "https://theignitemarketing.com/email-marketing-strategy/",
    },
    {
      img: ConversionImg,
      title: "Brand Development",
      des: "Grow a strong and memorable brand. We craft brand strategy, visual identity, messaging, and guidelines to position your business with clarity and impact.",
      url: "https://theignitemarketing.com/brand-developement-services/",
    },
    {
      img: SeoImg,
      title: "WordPress Agency",
      des: "As a specialized WordPress agency, we design and develop fast, secure, and user-friendly websites. From custom themes to performance optimization, we ensure your website becomes one of your strongest marketing tools.",
      url: "https://theignitemarketing.com/wordpress-agency/",
    },
    // {
    //   img: GoogleMetaImg,
    //   title: "Google & Meta Ads",
    //   des: "Laser-targeted campaigns built for ROI.",
    // },
    // {
    //   img: ConversionImg,
    //   title: "Conversion-Optimized Landing Pages",
    //   des: "Built to convert cold traffic.",
    // },
    // {
    //   img: ContentImg,
    //   title: "Content Creation + Social Media",
    //   des: "Scroll-stopping content & calendars.",
    // },
    // {
    //   img: SeoImg,
    //   title: "SEO + Organic Growth",
    //   des: "Technical SEO + content that ranks.",
    // },
    // {
    //   img: GoogleMetaImg,
    //   title: "Google & Meta Ads",
    //   des: "Laser-targeted campaigns built for ROI.",
    // },
    // {
    //   img: ConversionImg,
    //   title: "Conversion-Optimized Landing Pages",
    //   des: "Built to convert cold traffic.",
    // },
    // {
    //   img: ContentImg,
    //   title: "Content Creation + Social Media",
    //   des: "Scroll-stopping content & calendars.",
    // },
    // {
    //   img: SeoImg,
    //   title: "SEO + Organic Growth",
    //   des: "Technical SEO + content that ranks.",
    // },
  ];

  return (
    <section className="flex justify-center bg-[#F9FAFB]">
      <div className="max-w-[1440px] w-full">
        <div className="py-[50px]">
          <div className=" px-[20px] md:px-[50px] xl:px-[112px] flex justify-between items-center">
            <div className="flex flex-col gap-[12px] w-full  ">
              <h2 className=" text-[32px] leading-[48px] xl:text-[48px] xl:leading-[64px] font-semibold text-[#121212] ">
                What We Do Best
              </h2>
              <div className=" flex items-end justify-between gap-[20px] ">
                <p className="text-[16px] font-normal text-[#5F6572] leading-[24px]">
                  Expand the capabilities of the Linear system with a wide
                  variety of integrations that keep everyone in your
                  organization aligned and focused.
                </p>
                <div className="flex items-end justify-end gap-[12px] ">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="h-[40px] w-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer "
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="h-[40px] w-[40px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}

          <div className="mt-[60px] ">
            {/* Swiper */}
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={4}
              spaceBetween={32}
              pagination={{ clickable: true }}
              centeredSlides={false}
              slidesOffsetBefore={120}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                  slidesOffsetBefore: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  slidesOffsetBefore: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                  slidesOffsetBefore: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                  slidesOffsetBefore: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                  slidesOffsetBefore: 24,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper max-h-[640px]"
            >
              {selider.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="max-h-[570px] !h-auto flex mb-[60px] mt-[20px]  "
                >
                  <a href={item.url}>
                    <div className="w-full max-w-[375px] bg-white shadow-lg rounded-[12px]  flex flex-col overflow-hidden h-full transition duration-400 ease-in-out hover:scale-105">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                      {/* flex-grow */}
                      <div className="flex flex-col gap-3 p-6 ">
                        <h3 className="text-[20px] font-semibold text-[#121212] leading-[29px]">
                          {item.title}
                        </h3>
                        <p className="text-[16px] text-[#4B5563] leading-[24px]">
                          {item.des}
                        </p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
