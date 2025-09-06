import {
  Table,
  TableBody,
  //   TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import ClickUp from "../assets/allimg/Group 78.png";

export default function Understand() {
  return (
    <section className="flex justify-center bg-[#fff]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[20px] md:px-[50px] lg:px-[112px] py-[112px]">
          <div>
            <div>
              <h3 className="text-[32px] leading-[46px] md:text-[48px] md:leading-[64px] font-semibold text-[#121212] md:text-center ">
                We understand your industry. <br className="hidden md:block" />{" "}
                We’ve done it before.
              </h3>
            </div>
            {/* max-w-[692px] */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-[32px] mt-[50px] ">
              <div className=" w-full rounded-[12px] shadow-2xl ">
                <Table>
                  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                  <TableHeader className="bg-gradient-to-r from-pink-500 to-blue-500  ">
                    <TableRow>
                      <TableHead className=" text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[9.44px] md:p-[16px] inter-tex font-bold text-[#FFFFFF]  rounded-tl-[12px] ">
                        Industry
                      </TableHead>
                      <TableHead className=" text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[9.44px] md:p-[16px] inter-tex font-bold text-[#FFFFFF] rounded-tr-[12px] ">
                        Results
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className=" ">
                      <TableCell className=" text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Real Estate
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        150+ leads/month with landing page + retargeting
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Healthcare
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        Google Ads for clinics — leads under AED 30
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212] ">
                        E-commerce
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        4X–8X ROAS with full-funnel sales system
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Education
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        Lead generation for study abroad & consultants
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Tech/SaaS
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563]">
                        Full performance stack + CRM setup
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212] ">
                        Luxury/Lifestyle
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563]">
                        High-converting content + UGC reels
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              {/* */}
              {/* */}
              <div className="max-w-[480px] max-h-[600px] h-full hidden lg:block  ">
                <img src={ClickUp} alt="ClickUp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
