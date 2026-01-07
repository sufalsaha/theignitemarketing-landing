// import ClickUp from "../assets/allimg/Group 78.png";
import ConversionImg from "../assets/allimg/Rectangle 39844 (3).jpg";

export default function AboutUs() {
  return (
    <section className="bg-[#f6f3f3] flex justify-center">
      <div className="max-w-[1440px] w-full">
        <div className="px-[20px] lg:px-[50px] xl:px-[112px] py-[100px]">
          {/* MAIN ROW */}
          <div className="flex flex-col lg:flex-row items-center gap-[40px]">
            {/* IMAGE - LEFT */}
            <div className="w-full lg:w-1/2">
              <img
                src={ConversionImg}
                alt="Digital Marketing"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* CONTENT - RIGHT */}
            <div className="w-full lg:w-1/2">
              <div className="">
                <h3 className="text-[26px] md:text-[32px] font-semibold text-[#121212] mb-[20px]">
                  Why Choose Our Digital Agency?
                </h3>

                <p className="text-[16px] leading-[28px] text-[#5A5A5A] mb-[20px]">
                  At{" "}
                  <span className="font-medium text-[#121212]">
                    The Ignite Marketing
                  </span>
                  , we don’t just build websites or run ads. We develop
                  results-driven digital strategies that drive real growth.
                  Whether you want to boost your online presence, convert more
                  leads, or scale your brand, our experienced team delivers
                  tailored solutions to meet your business goals.
                </p>

                <ul className="space-y-[14px] text-[16px] text-[#5A5A5A]">
                  <li>
                    <div className="flex items-start gap-3">
                      {/* DOT */}
                      <span className="mt-[8px] h-2 w-2 bg-black rounded-full flex-shrink-0"></span>

                      {/* TEXT */}
                      <p className="text-[16px] leading-[28px] text-[#5A5A5A]">
                        <span className="font-semibold text-[#121212]">
                          Comprehensive Services —
                        </span>{" "}
                        From SEO, web design, content marketing to paid media
                        campaigns, we cover all your digital needs.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-3">
                      {/* DOT */}
                      <span className="mt-[8px] h-2 w-2 bg-black rounded-full flex-shrink-0"></span>

                      {/* TEXT */}
                      <p className="text-[16px] leading-[28px] text-[#5A5A5A]">
                        <span className="font-semibold text-[#121212]">
                          Customized Strategies —
                        </span>{" "}
                        We take time to understand your business, audience, and
                        objectives to craft a strategy that works.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-3">
                      {/* DOT */}
                      <span className="mt-[8px] h-2 w-2 bg-black rounded-full flex-shrink-0"></span>

                      {/* TEXT */}
                      <p className="text-[16px] leading-[28px] text-[#5A5A5A]">
                        <span className="font-semibold text-[#121212]">
                          Transparent & Measurable Results —
                        </span>{" "}
                        Data-driven performance with clear reporting, real
                        metrics, and tangible ROI.
                      </p>
                    </div>
                  </li>

                  <li></li>

                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
