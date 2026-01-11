import { StackingCards } from "@/components/WorkingProcess";
import HeroSection from "../components/HeroSection";
import Selaider from "../components/Selaider";
import Understand from "@/components/understand";
import HappyClient from "@/components/Happyclient";
import Questions from "@/components/questions";
import Contactform from "@/components/contactform";
import Webflow from "../assets/allimg/img.jpg";
import calandericon from "../assets/allimg/Trailing Icon.svg";
import clockicon from "../assets/allimg/Trailing Icon (1).svg";
import Proven from "../assets/allimg/img (1).jpg";
import Transformative from "../assets/allimg/img (2).jpg";
import img1 from "../assets/allimg/65e1f5506f78e1e528ce1414_raiting.svg.png";
import ster from "../assets/allimg/Vector.svg";
import bgimg1 from "../assets/allimg/Background+Border (1).png";
import bgimg2 from "../assets/allimg/Backgrounder (1).png";
import bgimg3 from "../assets/allimg/Background+Border (2).png";
import bgimg4 from "../assets/allimg/Background+Ber (1).png";
import bgimg5 from "../assets/allimg/Backgroundr (2).png";
import bgimg6 from "../assets/allimg/Background+Border (3).png";
import bgimg7 from "../assets/allimg/Background+Border (4).png";
import container from "../assets/allimg/Container.jpg";
import container1 from "../assets/allimg/Frame 1618873223.png";
import container2 from "../assets/allimg/image 841.png";
import GoogleMap from "@/components/Googlemap";
import LogoGrid from "@/components/MainSection";
import SuccessCard from "@/components/SuccessCard";
import CallToActionCard from "@/components/callToActionCard";
import AboutUs from "@/components/aboutUs";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[20px] py-[50px] xl:px-[112px] xl:py-[112px]">
            <div className="flex flex-col justify-between items-center lg:flex-row gap-[50px] bg-[#F9FAFB] py-[29px] px-[20px]  xl:pr-[45px] xl:pl-[75px] rounded-[16px] border border-[#E8E8E8] ">
              <div className="max-w-[498px]">
                <h2 className="text-[32px] font-semibold text-[#121212] leading-[48px] tracking-[-1px]">
                  We’re not just a digital agency. We’re your revenue growth
                  engine.
                </h2>
                <p className="text-[16px] font-normal text-[#5F6572] leading-[27px]">
                  We help Dubai businesses scale by deploying automated sales
                  funnels, precision advertising, and advanced SEO systems that
                  drive measurable ROI across all channels.
                </p>
                <div className="flex  items-center">
                  <img src={img1} alt="" className="w-[118px]" />
                  <div>
                    <div className="flex gap-[4px] mb-[8px]">
                      <img src={ster} alt="ster" />
                      <img src={ster} alt="ster" />
                      <img src={ster} alt="ster" />
                      <img src={ster} alt="ster" />
                      <img src={ster} alt="ster" />
                    </div>
                    <p>Average Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] ">
                <div className="flex flex-col gap-[8px] ">
                  <img src={bgimg1} alt="" className="w-[296px] h-[196px] " />
                  <img src={bgimg2} alt="" className="w-[296px] h-[137px] " />
                  <img src={bgimg3} alt="" className="w-[296px] h-[96px] " />
                </div>
                <div className="flex flex-col gap-[8px] ">
                  <img src={bgimg4} alt="" className="w-[152px] h-[123px] " />
                  <img src={bgimg5} alt="" className="w-[152px] h-[95px] " />
                  <img src={bgimg6} alt="" className="w-[152px] h-[108px] " />
                  <img src={bgimg7} alt="" className="w-[152px] h-[92px] " />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:flex-row gap-[24px] mt-[24px] ">
              <div className="max-w-[446px]">
                <img
                  src={container}
                  alt="Container"
                  className="w-full rounded-[14px] "
                />
              </div>

              <div className="flex flex-col justify-center gap-[24px] w-full ">
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-[20px] bg-[#F9FAFB] py-[42px] px-[32px] rounded-[16px] border border-[#E8E8E8]   ">
                  <div className="max-w-[470px] flex flex-col gap-[14px] justify-center ">
                    <h2 className="text-[25px] font-semibold text-[#121212] leading-[32px] md:text-[30px] md:leading-[48px]">
                      AED 50M+ Revenue Generated
                    </h2>
                    <p className="text-[16px] font-medium text-[#5F6572] leading-[23.2px]">
                      We don’t just deliver traffic; we deliver bankable
                      results. Our data-driven campaigns have scaled Revenue for
                      Dubai’s leading Real Estate, Medical, and Service brands.
                    </p>
                  </div>
                  <div className="max-w-[270px] w-full  lg:min-w-[200px] ">
                    <img
                      src={container1}
                      alt="1618873223"
                      className="w-full h-full "
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-[20px] bg-[#F9FAFB] py-[42px] px-[32px] rounded-[16px] border border-[#E8E8E8]   ">
                  <div className="max-w-[470px] flex flex-col gap-[14px] justify-center ">
                    <h2 className="text-[25px] font-semibold text-[#121212] leading-[32px] md:text-[30px] md:leading-[48px]">
                      Certified Market Leaders
                    </h2>
                    <p className="text-[16px] font-medium text-[#5F6572] leading-[23.2px]">
                      Stop wasting budget on guesswork. The senior team of our
                      digital agency leverages advanced GEO & AEO strategies to
                      position your brand as the undisputed authority.
                    </p>
                  </div>
                  <div className="min-w-[224px] lg:min-w-[180px]">
                    <img
                      src={container2}
                      alt="container2"
                      className="w-[224px]  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />

      <Selaider />

      <StackingCards />

      <SuccessCard />

      <LogoGrid />

      <Understand />

      <CallToActionCard />

      {/* <BookACallFrom /> */}

      <Contactform />

      <Questions />

      <HappyClient />

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[20px] md:px-[50px] py-[80px] xl:px-[112px] lg:py-[112px]">
            <div>
              <div className="flex flex-col justify-center items-center gap-[18px]  ">
                <h2 className="text-[48px] font-semibold text-[#2E3138] leading-[64px] text-center ">
                  Market Intelligence & Growth Briefs
                </h2>
                <p className="max-w-[600px] text-[20px] font-normal text-[#5F6572] leading-[30px] text-center">
                  Strategies for the C-Suite. We analyze Dubai’s digital shifts
                  so you can capitalize on them before your competitors do.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[80px] ">
                <div className="w-full max-w-[384px] bg-white shadow-lg rounded-[12px] flex flex-col overflow-hidden h-full  transition duration-400 ease-in-out hover:scale-105">
                  <img
                    src={Webflow}
                    alt="Webflow"
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex flex-col gap-[24px] p-[24px] flex-grow">
                    <h3 className="text-[20px] font-normal text-[#2E3138] leading-[30px]">
                      The Shift to AEO: Why "Answer Engine Optimization" is
                      replacing traditional SEO in 2026.
                    </h3>
                    <div className="flex gap-[20px] ">
                      <div className="flex gap-[4px] items-center ">
                        <img src={calandericon} alt="calandericon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          Future Tech
                        </p>
                      </div>
                      <div className="flex gap-[4px] items-center ">
                        <img src={clockicon} alt="clockicon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          5 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[384px] bg-white shadow-lg rounded-[12px] flex flex-col overflow-hidden h-full  transition duration-400 ease-in-out hover:scale-105">
                  <img
                    src={Proven}
                    alt="Webflow"
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex flex-col gap-[24px] p-[24px] flex-grow">
                    <h3 className="text-[20px] font-normal text-[#2E3138] leading-[30px]">
                      Beyond Portals: How Dubai Real Estate Leaders are using AI
                      Funnels to bypass Property Finder.
                    </h3>
                    <div className="flex gap-[20px] ">
                      <div className="flex gap-[4px] items-center ">
                        <img src={calandericon} alt="calandericon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          Real Estate
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
                <div className="w-full max-w-[384px] bg-white shadow-lg rounded-[12px] flex flex-col overflow-hidden h-full  transition duration-400 ease-in-out hover:scale-105">
                  <img
                    src={Transformative}
                    alt="Webflow"
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex flex-col gap-[24px] p-[24px] flex-grow">
                    <h3 className="text-[20px] font-normal text-[#2E3138] leading-[30px]">
                      The "High-Ticket" Ad Strategy: How to lower CPA while
                      increasing lead quality.
                    </h3>
                    <div className="flex gap-[20px] ">
                      <div className="flex gap-[4px] items-center ">
                        <img src={calandericon} alt="calandericon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          Paid Media
                        </p>
                      </div>
                      <div className="flex gap-[4px] items-center ">
                        <img src={clockicon} alt="clockicon" />
                        <p className="text-[14px] font-normal text-[#5F6572] leading-[20px]">
                          4 min read
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

      <GoogleMap />

      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[20px] md:px-[50px] py-[80px] xl:px-[112px] lg:py-[112px]">
            <div className="flex flex-col justify-center items-center gap-[18px] ">
              <h2 className="text-[32px] md:text-[48px] font-semibold text-[#121212] md:leading-[64px] text-center ">
                Enough Theory. Let’s Talk Revenue.
              </h2>
              <p className="max-w-[600px] text-[20px] font-normal text-[#5F6572] leading-[30px] text-center ">
                {
                  "You have the vision. We have the blueprint. Partner with us to build a predictable growth engine that your competitors can’t ignore."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-[12px] mt-[40px]">
                <a
                  href="https://theignitemarketing.com/contact-us/"
                  style={{ textDecoration: "none" }}
                >
                  <button className="flex justify-center items-center gap-[6px] px-[48px] py-[16px] rounded-[8px] font-medium text-[18px] leading-[24px] text-[#fff] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-105 transition  ">
                    Claim Free Audit
                  </button>
                </a>
                <a
                  href="https://wa.me/923373244500"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <button className="flex justify-center items-center gap-[6px] px-[30px] py-[16px] rounded-[8px] font-medium text-[18px] leading-[30px] text-[#5F6572] bg-[#fff] shadow-lg hover:scale-105 transition border border-gray-200 ">
                    See Our Results
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
