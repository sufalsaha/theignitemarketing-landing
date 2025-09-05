import { RotateCw } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import ClickUp from "../assets/icon/checkbox-circle-line.svg";
import Calender from "../assets/icon/calendar-2-line.svg";
import ArhamSheikh from "../assets/image/Rectangle 7.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  yourName: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email name is required" })
    .email({ message: "Invalid email" })
    .max(100, { message: "Email must be less than 100 characters" }),

  phone: z
    .string()
    .trim()
    .min(1, { message: "phone number is required" })
    .max(20, { message: "Name must be less than 20 characters" }),

  subject: z.string().trim().min(1, { message: "Subject is required" }),

  message: z.string().trim().min(1, { message: "Message is required" }),
});

const creditOptions = [
  { subjet: "Digital Marketing" },
  { subjet: "Market Research" },
  { subjet: "Creative Layouts" },
  { subjet: "SEO & Backlinks" },
  { subjet: "Email Marketing" },
  { subjet: "Brand Development" },
];

export default function Contactform() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourName: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  const handlePackageClick = (index: number) => {
    setSelectedIndex(index);
  };

  console.log(creditOptions[selectedIndex].subjet);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(undefined);
    setSuccess(undefined);
    console.log(values);

    // const res = await await addContact(values);
    // if (res.errorMessage) {
    //   setError(res.errorMessage);
    // } else if (res.successMessage) {
    //   setSuccess(res.successMessage);
    //   form.reset();
    // }
  }

  const isSubmitting = form.formState.isSubmitting;
  return (
    <section className="flex justify-center bg-[#fff]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[20px] md:px-[50px] py-[80px] xl:px-[112px] lg:py-[112px]">
          <div className="flex flex-col lg:flex-row justify-between gap-[48px] ">
            <div>
              <h3 className="text-[40px] font-semibold text-[#000000] leading-[48px] ">
                Book A Free 30-Minute Consultation Call
              </h3>
              <div className="flex flex-col gap-[18px] mt-[36px] ">
                <div className="flex gap-[12px]">
                  <img src={ClickUp} alt="ClickUp" />
                  <p className="text-[18px] font-normal text-[#5F6572] leading-[28px] ">
                    Fill out the form with your basic details.
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={ClickUp} alt="ClickUp" />
                  <p className="text-[18px] font-normal text-[#5F6572] leading-[28px] ">
                    Our marketing team will contact you within 24 hours.
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src={ClickUp} alt="ClickUp" />
                  <p className="text-[18px] font-normal text-[#5F6572] leading-[28px] ">
                    Get a 30-minute consultation to explore your business
                    growth.
                  </p>
                </div>
              </div>
              <div className="h-[1px] bg-[#E4E2E2] w-[80%] my-[48px] "></div>
              <div className="flex flex-col gap-[12px] ">
                <h4 className="text-[16px] font-medium text-[#121212] leading-[24px]  ">
                  Schedule a call:
                </h4>
                <div className="flex items-center gap-[33px] border px-[14px] py-[13px] w-[314px] rounded-[6px]  ">
                  <div className="flex items-center gap-[16px] ">
                    <img
                      src={ArhamSheikh}
                      alt=""
                      className="w-[70px] h-[70px] "
                    />
                    <div>
                      <h3 className="text-[18px] font-medium text-[#121212] leading-[24px] ">
                        Arham Sheikh
                      </h3>
                      <p className="text-[14px] font-medium text-[#5F6572] leading-[24px]">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                  <img src={Calender} alt="" />
                </div>
              </div>
            </div>
            <div className="max-w-[620px] ">
              <div className="border-2  border-[#EBEBEB] p-[32px] rounded-[16px] w-full    ">
                <div className={`w-full `}>
                  <div className=" ">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
                      >
                        <FormField
                          control={form.control}
                          name="yourName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#5F6572] text-[14px] font-[500] leading-[16px]">
                                Full name*
                              </FormLabel>
                              <FormControl className="text-[#B5B5B5] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px] ">
                                <Input
                                  placeholder="Full name"
                                  {...field}
                                  className="h-full"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#5F6572] text-[14px] font-[500] leading-[16px]">
                                Email*
                              </FormLabel>
                              <FormControl className="text-[#B5B5B5] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px] ">
                                <Input
                                  type="email"
                                  placeholder="Email address"
                                  {...field}
                                  className="h-full"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#5F6572] text-[14px] font-[500] leading-[16px]">
                                Phone*
                              </FormLabel>
                              <FormControl className="text-[#B5B5B5] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px] ">
                                <Input
                                  placeholder="Phone number"
                                  {...field}
                                  className="h-full"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#5F6572] text-[14px] font-[500] leading-[16px]">
                                Message
                              </FormLabel>
                              <FormControl className="text-[#000] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px]">
                                <Textarea
                                  placeholder="Your message"
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className=" flex flex-col gap-[30px] ">
                          <h3>How can we help you?</h3>
                          <div className="flex flex-wrap gap-[10px] ">
                            {creditOptions.map((credits, i) => (
                              <button
                                key={i}
                                onClick={() => handlePackageClick(i)}
                                className={`px-[16px] py-[10px] border border-[#DDDDDD]  rounded-[6px] cursor-pointer
                               ${
                                 selectedIndex === i
                                   ? " bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg text-[#fff]"
                                   : "bg-white border-gray-300"
                               }
                        hover:bg-[#a9ff62]`}
                              >
                                <p> {credits.subjet.toLocaleString()} </p>
                                {/* <p> </p> */}
                              </button>
                            ))}
                          </div>
                        </div>

                        {error && (
                          <FormMessage className="mt-5">{error}</FormMessage>
                        )}
                        {success && (
                          <FormMessage className="mt-5 text-green-500">
                            {success}
                          </FormMessage>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-full px-[20px] py-[12px] bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg text-[#FFFFFF] rounded-[10px] text-[18px] font-[500] leading-[24px] transition-all flex justify-center items-center gap-[12px] "
                        >
                          Send message
                          {isSubmitting && (
                            <RotateCw className="animate-spin size-6 " />
                          )}
                          {/* isSubmitting &&  */}
                        </button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
