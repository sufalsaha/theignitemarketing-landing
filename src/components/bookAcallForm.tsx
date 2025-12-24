/* eslint-disable @typescript-eslint/no-explicit-any */
import { RotateCw } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Checkbox } from "./ui/checkbox";

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

  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),

  message: z.string().trim().min(1, { message: "Message is required" }),
});

export default function BookACallFrom() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(undefined);
    setSuccess(undefined);
    console.log(values);
    // console.log(subjet);
    const formData = {
      your_name: values.yourName,
      your_email: values.email,
      your_phone: values.phone,
      your_message: values.message,
      your_checkbox: "true",
    };

    const res = await fetch(
      "https://theignitemarketing.com/wp-json/reactcf7f2/v1/submit",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();
    // console.log(data.message);

    if (data.success === false) {
      setError(data.message);
    } else if (data.success === true) {
      setSuccess(data.message);
      form.reset();
    }
  }

  const [defaultCountry, setDefaultCountry] = useState<any>("ae");
  async function getCountry() {
    try {
      const response = await fetch(`https://api.country.is`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: { ip: string; country: string } = await response.json();
      console.log("Full Response:", data);

      // Extract only the country
      console.log("Country:", data.country);

      return data.country;
    } catch (error) {
      console.error("Error fetching country:", error);
      return "PK";
    }
  }

  async function setupCountry() {
    setDefaultCountry(await getCountry());
  }
  useEffect(() => {
    setupCountry();
  }, []);

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="yourName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#5F6572] text-[14px] font-[500] leading-[16px]">
                  Full name*
                </FormLabel>
                <FormControl className="text-[#000] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px] ">
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
                <FormControl className="text-[#000] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px] ">
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

          {/* <label className="block font-medium">Phone *</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="BD" // Bangladesh default
                placeholder="Enter phone number"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )} */}

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#5F6572] text-[14px] font-[500] leading-[16px]">
                  Phone *
                </FormLabel>
                <FormControl className="text-[#000] text-[16px] font-[400] leading-[24px] p-[12px] border-[#D1D5DB] rounded-[6px]">
                  <PhoneInput
                    {...field}
                    key={defaultCountry}
                    defaultCountry={defaultCountry}
                    placeholder="Enter phone number"
                    className="w-full border rounded-md px-3 py-2 text-sm"
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
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex items-center gap-2 ">
                  <FormControl>
                    <Checkbox
                      id="acceptTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange} // ShadCN Checkbox uses onCheckedChange
                      className="w-4 h-4 border border-[#000]"
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="acceptTerms"
                    className="text-sm font-medium"
                  >
                    I accept the terms and conditions
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-[#000] text-[11px] font-[400] ">
            flex items-center gap-2{" "}
            <a
              href="https://theignitemarketing.com/privacy-policy/"
              className="text-[#324CF5] underline "
            >
              {" "}
              Privacy Policy.{" "}
            </a>{" "}
            and Terms and Conditions, and I consent to the processing of my
            personal data in accordance with GDPR regulations.
          </p>

          {error && <FormMessage className="mt-5">{error}</FormMessage>}
          {success && (
            <FormMessage className="mt-5 text-green-500">{success}</FormMessage>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full  px-[20px] py-[12px] cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg text-[#FFFFFF] rounded-[10px] text-[18px] font-[500] leading-[24px] transition-all flex justify-center items-center gap-[12px] "
          >
            Send message
            {isSubmitting && <RotateCw className="animate-spin size-6 " />}
            {/* isSubmitting &&  */}
          </button>
        </form>
      </Form>
    </div>
  );
}
