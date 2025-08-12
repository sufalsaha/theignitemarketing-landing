import ClickUp from "../assets/icon/SVG.svg";
import Zapier from "../assets/icon/SVG (4).svg";
import Shopify from "../assets/icon/Img.svg";
import Typeform from "../assets/icon/SVG (5).svg";
import Notion from "../assets/icon/Img (3).svg";
import GoogleAds from "../assets/icon/Img (1).svg";
import Klaviyo from "../assets/icon/SVG (6).svg";
import GoHighLevel from "../assets/icon/SVG (1).svg";
import WordPress from "../assets/icon/Img (4).svg";
import MetaAds from "../assets/icon/Img (2).svg";
import Elementor from "../assets/icon/SVG (7).svg";
import GA4 from "../assets/icon/SVG (2).svg";
import Webflow from "../assets/icon/SVG (8).svg";
import Wix from "../assets/icon/SVG (9).svg";

import IconCard from "./IconCard";

export default function LogoGrid() {
  return (
    <>
      <section className="flex justify-center bg-[#fff]">
        <div className="max-w-[1440px] w-full ">
          <div className="px-[112px] py-[112px]">
            <div className=" w-full flex justify-center items-center ">
              <h2 className="max-w-[684px] text-[48px] font-semibold text-[#121212] leading-[64px] text-center ">
                We Speak Fluent <br /> Automation & Performance
              </h2>
            </div>
            <div className="relative w-full h-[561px] flex items-center justify-center mt-[60px] ">
              <div className="absolute inset-0 bg-gradient-to-t from-[#C668AA] to-[#B170B000] opacity-20 blur-3xl"></div>

              <div className="flex justify-center px-[35px] pb-[64px] pt-[10px] ">
                <div className="flex items-center gap-[6px] relative  ">
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={ClickUp}
                      des="ClickUp"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Zapier}
                      des="Zapier"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={Shopify}
                      des="Shopify"
                      className="w-[35px] h-[35px]"
                    />
                    <IconCard
                      img={Typeform}
                      des="Typeform"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Notion}
                      des="Notion"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={GoogleAds}
                      des="Google Ads"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Klaviyo}
                      des="Klaviyo"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={GoHighLevel}
                      des="GoHighLevel"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={WordPress}
                      des="WordPress"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={ClickUp}
                      des="ClickUp"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={MetaAds}
                      des="Meta Ads"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Elementor}
                      des="Elementor"
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={GA4}
                      des="GA4"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Webflow}
                      des="Webflow"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Wix}
                      des="Wix"
                      className="w-[32px] h-[32px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] ">
                    <IconCard
                      img={Typeform}
                      des="Typeform"
                      className="w-[40px] h-[40px]"
                    />
                    <IconCard
                      img={Zapier}
                      des="Zapier"
                      className="w-[32px] h-[32px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
