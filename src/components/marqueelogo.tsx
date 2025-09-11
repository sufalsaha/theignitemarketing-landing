import Marquee from "react-fast-marquee";
import logo1 from "../assets/allimg/Frame 15.svg";
import logo2 from "../assets/allimg/Frame 6.svg";
import logo3 from "../assets/allimg/Frame 17.svg";
import logo4 from "../assets/allimg/Frame 14.svg";
import logo5 from "../assets/allimg/Frame 16.svg";

export default function MarqueeLogo() {
  return (
    <section className="flex justify-center ">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[20px] py-[50px]  ">
          <div className="pb-[50px] ">
            <div className="w-full h-[1px] bg-[#DE5EA340] "></div>
            <div className="flex justify-center gap-[20px] lg:gap-[48px]  mt-[28px]">
              <div className="w-[152px] md:w-[280px] xl:w-[433px] ">
                <p className="leading-[100%] text-[12px] md:leading-[32px] md:text-[24px] font-normal text-[#5F6572] ">
                  Trusted by the world's biggest Brands
                </p>
              </div>
              <div className="w-[225px] md:w-[400px] lg:w-[550px] xl:w-[646px] ">
                <Marquee>
                  <div className="flex gap-[10px] ml-[10px] ">
                    <img
                      src={logo1}
                      alt="logo1"
                      className="h-[42px] md:h-[60px] lg:h-[64px] "
                    />
                    <img
                      src={logo2}
                      alt="logo2"
                      className="h-[42px] md:h-[60px] lg:h-[64px] "
                    />
                    <img
                      src={logo3}
                      alt="logo3"
                      className="h-[42px] md:h-[60px] lg:h-[64px] "
                    />
                    <img
                      src={logo4}
                      alt="logo4"
                      className="h-[42px] md:h-[60px] lg:h-[64px] "
                    />
                    <img
                      src={logo5}
                      alt="logo5"
                      className="h-[42px] md:h-[60px] lg:h-[64px] "
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
