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
              <h2 className="text-[32px] leading-[46px] md:text-[48px] md:leading-[64px] font-semibold text-[#121212] md:text-center ">
                We Don't Guess. We Specialize.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-2">
                Engineered revenue systems for Dubai’s most competitive sectors.
              </p>
            </div>
            {/* max-w-[692px] */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-[32px] mt-[40px] ">
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
                        AED 40M+ Sales Pipeline generated via HNWI targeting.
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Healthcare
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        {
                          "100+ High-Ticket Patient Bookings (Derma/Dental) in 30 days."
                        }
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212] ">
                        E-commerce
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        Scaled to 8.5x ROAS while doubling monthly ad spend.
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Education
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563] ">
                        450+ Student Enrollments secured for Fall Intake at 40%
                        lower CPA.
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212]  ">
                        Tech/SaaS
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563]">
                        {
                          "B2B Lead Generation with <$25 Cost Per Qualified Demo."
                        }
                      </TableCell>
                    </TableRow>
                    <TableRow className=" ">
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-semibold text-[#121212] ">
                        Luxury/Lifestyle
                      </TableCell>
                      <TableCell className="text-[8.99px] leading-[14.15px] md:text-[16px] md:leading-[24px] p-[14px] md:p-[24px] font-normal text-[#4B5563]">
                        Brand positioning that captures Top 1% spending power
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              {/* */}
              {/* */}
              <div className="min-w-[480px] max-h-[600px] h-full hidden lg:block  ">
                <img src={ClickUp} alt="ClickUp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
