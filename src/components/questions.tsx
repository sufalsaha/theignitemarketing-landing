import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import chat from "../assets/allimg/chat-smile-2-fill.svg";

export default function Questions() {
  return (
    <section className="flex justify-center bg-[#fff]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[20px] md:px-[50px] py-[80px] xl:px-[112px] lg:py-[112px]">
          <div className="flex flex-col items-center gap-[80px] ">
            <div className="flex flex-col gap-[18px] ">
              <h2 className="text-[32px] leading-[48px] md:text-[48px] font-semibold text-[#2E3138] lg:leading-[64px] text-center">
                Everything You Need to Know <br /> Before Scaling.
              </h2>
              <p className="max-w-[640px] text-[20px] font-normal text-[#5F6572] leading-[30px] text-center">
                Total transparency. No hidden fees, no locked contracts, just
                results from your digital agency Ignite Marketing.
              </p>
            </div>
            <div className="max-w-[800px] w-full ">
              <Accordion type="single" className=" space-y-3" collapsible>
                <AccordionItem
                  value="item-1"
                  className=" border-2 border-[#E5E7EB] rounded-[16px] overflow-hidden"
                >
                  <AccordionTrigger className="bg-[#ffffff] px-6 py-4 flex items-center justify-between w-full hover:no-underline">
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                      {`Q1: How quickly can we expect to see a return on
                      investment (ROI)?`}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-white">
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      <p>
                        We don't believe in long ramp-up periods. Our "Precision
                        Launch" system typically generates initial qualified
                        lead flow within the first 14 days of campaign
                        deployment, with full optimization achieved by day 45.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className=" border-2 border-[#E5E7EB] rounded-[16px] overflow-hidden"
                >
                  <AccordionTrigger className="bg-[#ffffff] px-6 py-4 flex items-center justify-between w-full hover:no-underline">
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                      Q2: Do you guarantee results?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-white">
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      <p>
                        We guarantee work, not magic. However, our "Performance
                        Partnership" model means our goals are aligned with
                        yours. If we don't hit the agreed KPIs, we work for free
                        until we do.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className=" border-2 border-[#E5E7EB] rounded-[16px] overflow-hidden"
                >
                  <AccordionTrigger className="bg-[#ffffff] px-6 py-4 flex items-center justify-between w-full hover:no-underline">
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                      Q3: What makes Ignite different from other Dubai agencies?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-white">
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      <p>
                        Most agencies just "run ads." We build Revenue
                        Ecosystems. We combine Paid Ads, SEO, and Conversion
                        Psychology into a single machine. You aren't hiring a
                        freelancer; you're hiring a certified team of 10+
                        experts.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className=" border-2 border-[#E5E7EB] rounded-[16px] bg-white overflow-hidden"
                >
                  <AccordionTrigger className="bg-[#ffffff] px-6 py-4 flex items-center justify-between w-full hover:no-underline">
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-[#111827]">
                      Q4: Is there a minimum budget requirement?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-white">
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      <p>
                        To ensure our algorithms have enough data to optimize
                        effectively, we work best with partners ready to invest
                        a minimum of AED 10,000/month in ad spend. This ensures
                        we can scale your revenue profitably.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-9">
                <a
                  href="https://theignitemarketing.com/faq/"
                  style={{ textDecoration: "none" }}
                >
                  <button className="flex justify-center items-center gap-[6px] cursor-pointer px-[20px] py-[16px] rounded-[8px] font-medium text-[18px] text-[#000]  shadow-lg hover:scale-105 transition border border-gray-200 ">
                    {/* <img src={chat} alt="chat" /> */}
                    {`Read more >`}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
