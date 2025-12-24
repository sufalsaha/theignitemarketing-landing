import bgimg from "../assets/allimg/quote.png";
import pofileimg from "../assets/allimg/Rectangle 7.png";
import chakimg from "../assets/allimg/download (1).svg";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookACallFrom from "./bookAcallForm";

export default function CallToActionCard() {
  return (
    <div className=" flex justify-center items-center px-[20px] ">
      <div className="max-w-[395px] min-h-[340px] ">
        <div
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "100% 100%",
          }}
          className="bg-no-repeat min-h-[340px] "
        >
          <div className="w-full h-full p-[28px] flex flex-col  items-center gap-[20px] ">
            <div className="flex gap-[20px] ">
              <img
                src={pofileimg}
                alt="pofileimg"
                className="w-[70px] h-[70px] rounded-full "
              />
              <div>
                <p className="text-[22px] text-[#000] leading-[32px] ">
                  Are you interested to learn more about our
                </p>
                <a
                  href="https://theignitemarketing.com/wordpress-agency/"
                  className="text-[24px] text-[#e7a31d] underline  "
                >
                  <span>WordPress services</span>
                </a>
              </div>
            </div>
            {/* <button className="text-[20px] font-normal text-[#5F6572] leading-[32px] py-[10px] px-[70px] w-full bg-[#f8d353] rounded-[4px] cursor-pointer ">
              Book a Call
            </button> */}
            <div className="w-full">
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <button className="text-[20px] font-normal text-[#000] leading-[32px] py-[10px] px-[70px] w-full bg-[#f8d353] rounded-[4px] cursor-pointer  ">
                      Book a Call
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[60%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[60%] max-h-[90vh] overflow-hidden">
                    {/* <DialogHeader> */}
                    {/* <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription> */}
                    {/* </DialogHeader> */}

                    <div className="flex overflow-hidden max-h-[90vh] w-full">
                      <div className="overflow-y-auto w-full">
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
                          <div className="p-6  lg:p-6 w-full  flex flex-col justify-between">
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                Let's talk about your project
                              </h2>
                              <p className="text-gray-600 mb-6">
                                Fill out the form →
                              </p>
                              <ul className="list-none p-0 mb-8 space-y-2 text-gray-700">
                                <li>
                                  Call Us:{" "}
                                  <a
                                    href="tel:+971 52 952 3570"
                                    className="text-blue-600 hover:underline"
                                  >
                                    +971 52 952 3570
                                  </a>
                                </li>
                                <li>
                                  Send an email:{" "}
                                  <a
                                    href="mailto:Info@theignitemarketing.com"
                                    className="text-blue-600 hover:underline"
                                  >
                                    Info@theignitemarketing.com
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-blue-50 border-l-4 border-blue-200 p-6 rounded-md relative">
                              <span className="text-5xl text-blue-100 absolute top-2 left-4 font-serif">
                                ❝
                              </span>
                              <p className="text-gray-800 text-sm md:text-base leading-relaxed mt-4">
                                The Ignite Marketing team, led by Arham Sheikh,
                                transformed the client’s vision into a
                                high-performing website that exceeded every
                                expectation
                              </p>
                              <p className="font-semibold text-gray-900 mt-4">
                                Arham Sheikh
                              </p>
                              <p className="text-xs text-gray-500">
                                CEO & Founder
                              </p>
                            </div>
                          </div>

                          <div className="bg-[#E0EBFD] px-4 py-[50px]  w-full relative">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">
                              Fill out the form, and we will respond within one
                              business day.
                            </h3>

                            <BookACallFrom />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter> */}
                  </DialogContent>
                </form>
              </Dialog>
            </div>
            <a
              href="https://theignitemarketing.com/wordpress-agency/"
              className="text-[13px] font-normal text-[#5F6572] leading-[23px] underline"
            >
              <span>Or, Use this form to tell us about your needs</span>
            </a>
            <div className="flex justify-center items-center gap-[10px] ">
              <div className="flex justify-center items-center gap-[6px] ">
                <img src={chakimg} alt="chakimg" />
                <p className="text-[13px] font-normal text-[#000] leading-[23px]">
                  100% confidental
                </p>
              </div>
              <div className="w-[1px] h-[15px] bg-[#000] "></div>
              <div className="flex justify-center items-center gap-[6px] ">
                <img src={chakimg} alt="chakimg" />
                <p className="text-[13px] font-normal text-[#000] leading-[23px]">
                  We sign NDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
