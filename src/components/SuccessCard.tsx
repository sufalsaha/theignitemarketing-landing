import homeIcon from "../assets/icon/Background (1).svg";
import HealthcareIcon from "../assets/icon/Background (2).svg";
import cadeIcon from "../assets/icon/Background (3).svg";
import arrow1 from "../assets/icon/Arrow 2.svg";
import arrow2 from "../assets/icon/Arrow 3.svg";

export default function SuccessCard() {
  return (
    <section className="flex justify-center bg-[#fff]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[20px] md:px-[50px] lg:px-[112px] py-[112px]">
          <div className="mb-[60px] ">
            <h2 className="text-[48px] font-semibold text-[#121212] leading-[64px] text-center ">
              We understand your industry. <br /> We’ve done it before.
            </h2>
          </div>

          <div className="h-[400px] ">
            <div className="flex gap-[0px] relative h-[350px] ">
              <div className="-rotate-[7.1deg] absolute top-[30px]  ">
                <div className="p-[32px] rounded-[12px] shadow-2xl bg-[#fff]  w-[402px] border border-[#EEEEEE]  ">
                  <div className="flex flex-col gap-[32px] ">
                    <div className="flex gap-[16px]  ">
                      <img
                        src={homeIcon}
                        alt="homeIcon"
                        className="w-[64px] h-[64px] "
                      />
                      <div className="flex flex-col gap-[4px] ">
                        <h4 className="text-[20px] font-bold text-[#121212] leading-[28px] inter-text">
                          Real Estate Client
                        </h4>
                        <p className="text-[16px] font-medium text-[#16A34A] leading-[24px]">
                          2X ROAS in 30 Days
                        </p>
                      </div>
                    </div>
                    <p className="text-[18px] font-normal text-[#4B5563] leading-[28px] ">
                      Meta Ads + landing page = 142 leads/month
                    </p>
                    <div>
                      <p className="text-[14px] font-medium text-[#6B7280] leading-[13.56px] ">
                        ✅ Verified Results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rotate-[5.32deg] absolute left-[350px] z-10 ">
                <div className="p-[32px] rounded-[12px] shadow-2xl bg-[#fff] w-[402px] border border-[#EEEEEE] ">
                  <div className="flex flex-col gap-[32px] ">
                    <div className="flex gap-[16px]  ">
                      <img
                        src={HealthcareIcon}
                        alt="homeIcon"
                        className="w-[64px] h-[64px] "
                      />
                      <div className="flex flex-col gap-[4px] ">
                        <h4 className="text-[20px] font-bold text-[#121212] leading-[28px] inter-text">
                          Healthcare Clinic
                        </h4>
                        <p className="text-[16px] font-medium text-[#16A34A] leading-[24px]">
                          CPL Reduced by 60%
                        </p>
                      </div>
                    </div>
                    <p className="text-[18px] font-normal text-[#4B5563] leading-[28px] ">
                      Leads under AED 30 with optimized Google Ads + LP
                    </p>
                    <div>
                      <p className="text-[14px] font-medium text-[#6B7280] leading-[13.56px] ">
                        ✅ Verified Results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rotate-[-11.13deg] absolute left-[720px] top-[10px] ">
                <div className="p-[32px] rounded-[12px] shadow-2xl bg-[#fff]  w-[402px] border border-[#EEEEEE] ">
                  <div className="flex flex-col gap-[32px] ">
                    <div className="flex gap-[16px]  ">
                      <img
                        src={cadeIcon}
                        alt="homeIcon"
                        className="w-[64px] h-[64px] "
                      />
                      <div className="flex flex-col gap-[4px] ">
                        <h4 className="text-[20px] font-bold text-[#121212] leading-[28px] inter-text">
                          E-commerce Brand
                        </h4>
                        <p className="text-[16px] font-medium text-[#16A34A] leading-[24px]">
                          $9K to $76K in 60 Days
                        </p>
                      </div>
                    </div>
                    <p className="text-[18px] font-normal text-[#4B5563] leading-[28px] ">
                      Shopify + Meta funnel = 8X ROAS
                    </p>
                    <div>
                      <p className="text-[14px] font-medium text-[#6B7280] leading-[13.56px] ">
                        ✅ Verified Results
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[10px] left-[300px] ">
                <img src={arrow1} alt="arrow1" />
              </div>
              <div className="absolute top-[-45px] right-[400px] ">
                <img src={arrow2} alt="arrow2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
