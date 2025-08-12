// import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import Selaider from "../components/Selaider";
import StepCard from "../components/StepCard";
import SuccessCard from "../components/SuccessCard";

import Webflow from "../assets/image/img.png";
import calandericon from "../assets/icon/Trailing Icon.svg";
import clockicon from "../assets/icon/Trailing Icon (1).svg";
import Proven from "../assets/image/img (1).png";
import Transformative from "../assets/image/img (2).png";
import Questions from "@/components/questions";
import HeroGsap from "@/components/text";

export default function Home() {
  return (
    <>
      <HeroGsap />
      {/* <HeroSection /> */}

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[112px] py-[112px]">
            <div className="flex justify-between items-center bg-[#F9FAFB] py-[29px] pr-[45px] pl-[75px] rounded-[16px] ">
              <div className="max-w-[498px]">
                <h2 className="text-[32px] font-semibold text-[#121212] leading-[48px] tracking-[-1px]">
                  We’re not just a team. We’re your digital marketing backbone.
                </h2>
                <p className="text-[16px] font-normal text-[#5F6572] leading-[27px]">
                  We help businesses grow by creating customized marketing
                  strategies using smart technology, creative design, and proven
                  methods across global markets.
                </p>
                <div className="flex  items-center">
                  <img
                    src="../assets/image/65e1f5506f78e1e528ce1414_raiting.svg.png"
                    alt=""
                    className="w-[118px]"
                  />
                  <div>
                    <div className="flex">
                      <img src="../assets/icon/Vector.svg" alt="" />
                      <img src="../assets/icon/Vector.svg" alt="" />
                      <img src="../assets/icon/Vector.svg" alt="" />
                      <img src="../assets/icon/Vector.svg" alt="" />
                      <img src="../assets/icon/Vector.svg" alt="" />
                    </div>
                    <p>Rated on various platforms</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] ">
                <div className="flex flex-col gap-[8px] ">
                  <img
                    src="../assets/image/Background+Border (1).png"
                    alt=""
                    className="w-[296px] h-[196px] "
                  />
                  <img
                    src="../assets/image/Backgrounder (1).png"
                    alt=""
                    className="w-[296px] h-[137px] "
                  />
                  <img
                    src="../assets/image/Background+Border (2).png"
                    alt=""
                    className="w-[296px] h-[96px] "
                  />
                </div>
                <div className="flex flex-col gap-[8px] ">
                  <img
                    src="../assets/image/Background+Ber (1).png"
                    alt=""
                    className="w-[152px] h-[123px] "
                  />
                  <img
                    src="../assets/image/Backgroundr (2).png"
                    alt=""
                    className="w-[152px] h-[95px] "
                  />
                  <img
                    src="../assets/image/Background+Border (3).png"
                    alt=""
                    className="w-[152px] h-[108px] "
                  />
                  <img
                    src="../assets/image/Background+Border (4).png"
                    alt=""
                    className="w-[152px] h-[92px] "
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-[24px] mt-[24px] ">
              <div className="max-w-[446px]">
                <img
                  src="../assets/image/Container.png"
                  alt="Container"
                  className="w-full "
                />
              </div>

              <div className="flex flex-col justify-center gap-[24px] w-full ">
                <div className="flex justify-between gap-[20px] bg-[#F9FAFB] py-[42px] px-[32px] rounded-[16px] border border-[#E8E8E8]   ">
                  <div className="max-w-[309px] flex flex-col gap-[14px] justify-center ">
                    <h2 className="text-[32px] font-semibold text-[#121212] leading-[48px]">
                      100+Clients Served{" "}
                    </h2>
                    <p className="text-[16px] font-medium text-[#5F6572] leading-[23.2px]">
                      We’ve successfully served 100+ clients worldwide,
                      delivering tailored marketing solutions that drive leads,
                      conversions, and business growth.
                    </p>
                  </div>
                  <div className="max-w-[270px] max-h-[244px] ">
                    <img
                      src="../assets/image/Frame 1618873223.png"
                      alt="1618873223"
                      className="w-full h-full "
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-[20px] bg-[#F9FAFB] py-[42px] px-[32px] rounded-[16px] border border-[#E8E8E8]   ">
                  <div className="max-w-[309px] flex flex-col gap-[14px] justify-center ">
                    <h2 className="text-[32px] font-semibold text-[#121212] leading-[48px]">
                      5+ Years Experience
                    </h2>
                    <p className="text-[16px] font-medium text-[#5F6572] leading-[23.2px]">
                      We’ve successfully served 100+ clients worldwide,
                      delivering tailored marketing solutions that drive leads,
                      conversions, and business growth.
                    </p>
                  </div>
                  <div>
                    <img
                      src="../assets/image/image 841.png"
                      alt="1618873223"
                      className="w-[224px] h-[195px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Selaider />

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[112px] py-[112px]">
            <StepCard
              number={1}
              description={
                "In the discovery and audit phase, we analyze your goals, funnel, and competitors to shape an effective marketing website strategy."
              }
              image={"step.image"}
            />
          </div>
        </div>
      </section>

      <SuccessCard />

      <MainSection />

      <Questions />

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[112px] py-[112px]">
            <div>
              <div className="flex flex-col justify-center items-center gap-[18px]  ">
                <h2 className="text-[48px] font-semibold text-[#2E3138] leading-[64px] text-center ">
                  Latest Insights & Trends
                </h2>
                <p className="max-w-[600px] text-[20px] font-normal text-[#5F6572] leading-[30px] text-center">
                  Get insights, trends, and expert tips on design, technology,
                  and innovation for growth.
                </p>
              </div>

              <div className="flex gap-[32px] mt-[80px] ">
                <div className="w-full max-w-[384px] bg-white shadow-lg rounded-[12px] flex flex-col overflow-hidden h-full">
                  <img
                    src={Webflow}
                    alt="Webflow"
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex flex-col gap-[24px] p-[24px] flex-grow">
                    <h3 className="text-[20px] font-normal text-[#2E3138] leading-[30px]">
                      How to Improve Your Writing Efficiency: 5 Tips for Better
                      Content
                    </h3>
                    <div className="flex gap-[20px] ">
                      <div className="flex gap-[4px] items-center ">
                        <img src={calandericon} alt="calandericon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          Agu 12
                        </p>
                      </div>
                      <div className="flex gap-[4px] items-center ">
                        <img src={clockicon} alt="clockicon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          7 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[384px] bg-white shadow-lg rounded-[12px] flex flex-col overflow-hidden h-full">
                  <img
                    src={Proven}
                    alt="Webflow"
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex flex-col gap-[24px] p-[24px] flex-grow">
                    <h3 className="text-[20px] font-normal text-[#2E3138] leading-[30px]">
                      7 Proven Tips for Writing Engaging Blog Titles That
                      Attract Readers
                    </h3>
                    <div className="flex gap-[20px] ">
                      <div className="flex gap-[4px] items-center ">
                        <img src={calandericon} alt="calandericon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          Agu 12
                        </p>
                      </div>
                      <div className="flex gap-[4px] items-center ">
                        <img src={clockicon} alt="clockicon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          7 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[384px] bg-white shadow-lg rounded-[12px] flex flex-col overflow-hidden h-full">
                  <img
                    src={Transformative}
                    alt="Webflow"
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex flex-col gap-[24px] p-[24px] flex-grow">
                    <h3 className="text-[20px] font-normal text-[#2E3138] leading-[30px]">
                      10 Transformative Productivity Tips for the Overworked
                      Professional
                    </h3>
                    <div className="flex gap-[20px] ">
                      <div className="flex gap-[4px] items-center ">
                        <img src={calandericon} alt="calandericon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          Agu 12
                        </p>
                      </div>
                      <div className="flex gap-[4px] items-center ">
                        <img src={clockicon} alt="clockicon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          7 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[112px] py-[80px]">
            <div className="flex flex-col justify-center items-center gap-[18px] ">
              <h2 className="text-[48px] font-semibold text-[#121212] leading-[64px] text-center ">
                Ready to Accelerate Your Growth
              </h2>
              <p className="max-w-[600px] text-[20px] font-normal text-[#5F6572] leading-[30px] text-center ">
                Partner with a results-driven marketing agency that understands
                your goals. Let’s create powerful campaigns that convert and
                scale your business faster.
              </p>
              <div className="flex flex-wrap justify-center gap-[12px] mt-[40px]">
                <button className="flex justify-center items-center gap-[6px] px-[48px] py-[16px] rounded-[8px] font-medium text-[18px] leading-[24px] text-[#fff] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-105 transition ">
                  Get Started
                </button>
                <button className="flex justify-center items-center gap-[6px] px-[30px] py-[16px] rounded-[8px] font-medium text-[18px] leading-[30px] text-[#5F6572] bg-[#fff] shadow-lg hover:scale-105 transition border border-gray-200">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
