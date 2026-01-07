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
                Got questions? We have answers!
              </h2>
              <p className="text-[20px] font-normal text-[#5F6572] leading-[30px] text-center">
                For Your Online Advertising Needs, Why Pick iDigitalise?
              </p>
            </div>
            <div className="max-w-[800px] w-full">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      What digital marketing services do you offer?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      {`We provide full-stack digital marketing solutions
                      including SEO, paid advertising (Google & Meta), social
                      media management, content marketing, email marketing,
                      brand development, automation, analytics and custom web
                      development (e.g., WordPress) tailored for your business
                      goals.`}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      Do you work with all industries?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      Yes — we have experience with multiple sectors including
                      real estate, e-commerce, healthcare and more. We research
                      your market and competitors before crafting strategies.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      Can you handle website design and development?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      Absolutely. We also deliver custom WordPress solutions,
                      WooCommerce stores, theme/plugin development and ongoing
                      maintenance as part of your digital strategy.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      How do you start a project?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      First, we conduct a discovery call to understand your
                      goals. Then we perform market research and competitor
                      analysis to build a tailored strategy and campaign brief.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-3">
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
