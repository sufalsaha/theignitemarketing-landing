import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                      Do you guarantee leads?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      Digital marketing refers to advertising delivered through
                      digital channels such as search engines, websites, social
                      media, email, and mobile apps. It helps businesses reach
                      potential customers online.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      How soon can you start?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      Digital marketing refers to advertising delivered through
                      digital channels such as search engines, websites, social
                      media, email, and mobile apps. It helps businesses reach
                      potential customers online.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      What makes you different?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      Digital marketing refers to advertising delivered through
                      digital channels such as search engines, websites, social
                      media, email, and mobile apps. It helps businesses reach
                      potential customers online.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="text-[20px] font-medium text-[#111827] leading-[28px]  ">
                      Do you guarantee leads?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[16px] font-normal text-[#5F6572] leading-[24px]  ">
                      Digital marketing refers to advertising delivered through
                      digital channels such as search engines, websites, social
                      media, email, and mobile apps. It helps businesses reach
                      potential customers online.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
