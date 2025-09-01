import {
  Table,
  TableBody,
  //   TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import ClickUp from "../assets/image/Group 78.png";

export default function Understand() {
  return (
    <section className="flex justify-center bg-[#fff]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[112px] py-[112px]">
          <div>
            <div>
              <h3 className="text-[48px] font-semibold text-[#121212] leading-[64px] text-center ">
                We understand your industry. <br /> We’ve done it before.
              </h3>
            </div>
            <div className="flex justify-center items-end gap-[32px] mt-[50px] ">
              <div className="max-w-[692px] max-h-[495px] rounded-[12px] shadow-2xl ">
                <Table>
                  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                  <TableHeader className="bg-gradient-to-r from-pink-500 to-blue-500  ">
                    <TableRow>
                      <TableHead className="text-[16px] inter-tex font-bold text-[#FFFFFF] leading-[24px] p-[16px] rounded-tl-[12px] ">
                        Industry
                      </TableHead>
                      <TableHead className="text-[16px] inter-tex font-bold text-[#FFFFFF] leading-[24px] p-[16px] rounded-tr-[12px] ">
                        Results
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className=" ">
                      <TableCell className="text-[16px] font-semibold text-[#121212] leading-[24px] p-[24px]  ">
                        Real Estate
                      </TableCell>
                      <TableCell className="text-[16px] font-normal text-[#4B5563] leading-[24px] p-[24px] ">
                        150+ leads/month with landing page + retargeting
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[16px] font-semibold text-[#121212] leading-[24px] p-[24px]  ">
                        Healthcare
                      </TableCell>
                      <TableCell className="text-[16px] font-normal text-[#4B5563] leading-[24px] p-[24px] ">
                        Google Ads for clinics — leads under AED 30
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[16px] font-semibold text-[#121212] leading-[24px] p-[24px]  ">
                        E-commerce
                      </TableCell>
                      <TableCell className="text-[16px] font-normal text-[#4B5563] leading-[24px] p-[24px] ">
                        4X–8X ROAS with full-funnel sales system
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[16px] font-semibold text-[#121212] leading-[24px] p-[24px]  ">
                        Education
                      </TableCell>
                      <TableCell className="text-[16px] font-normal text-[#4B5563] leading-[24px] p-[24px] ">
                        Lead generation for study abroad & consultants
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[16px] font-semibold text-[#121212] leading-[24px] p-[24px]  ">
                        Tech/SaaS
                      </TableCell>
                      <TableCell className="text-[16px] font-normal text-[#4B5563] leading-[24px] p-[24px] ">
                        Full performance stack + CRM setup
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[16px] font-semibold text-[#121212] leading-[24px] p-[24px]  ">
                        Luxury/Lifestyle
                      </TableCell>
                      <TableCell className="text-[16px] font-normal text-[#4B5563] leading-[24px] p-[24px] ">
                        High-converting content + UGC reels
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="max-h-[600px] h-full max-w-[480px] ">
                <img src={ClickUp} alt="ClickUp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
