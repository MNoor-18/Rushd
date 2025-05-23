import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./button"; // Assuming shadcn/ui setup
import { Input } from "./input"; // Assuming shadcn/ui setup
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form"; // Assuming shadcn/ui setup
import { CardTitle, CardDescription, CardFooter } from "./card"; // Assuming shadcn/ui setup
import { Loader2 } from "lucide-react"; // For loading spinner
import toast from "react-hot-toast";

import useLanguage from "../../utils/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

// Define the Zod schema for form validation
// Basic phone regex, can be adjusted for more specific needs
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const SubscriptionFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100),
  mobile: z
    .string()
    .min(10, { message: "Mobile number should be at least 10 digits." })
    .max(15, { message: "Mobile number can be at most 15 digits." })
    .regex(phoneRegex, { message: "Please enter a valid mobile number." }),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters." })
    .max(50),
  propertyType: z
    .string()
    .min(2, { message: "Property type must be at least 2 characters." })
    .max(50, { message: "Property type can be at most 50 characters." }),
});

type SubscriptionFormValues = z.infer<typeof SubscriptionFormSchema>;

interface SubscriptionFormProps {
  setOpen: (isOpen: boolean) => void; // Function to set the modal open state
  plan: string; // The plan the user is interested in
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  plan,
  setOpen,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const currentLanguage = useLanguage();
  const thisFormData = currentLanguage.pricingData.form;
  const rushdData = currentLanguage.featuresData.whoCanUseRushd;

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(SubscriptionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      city: "",
      propertyType: "",
    },
  });

  async function onSubmit(values: SubscriptionFormValues) {
    setIsLoading(true);
    setSubmitStatus(null);

    const dataToSubmit = {
      ...values,
      plan: plan.charAt(0).toUpperCase() + plan.slice(1),
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwNpdmqjixDjiwTq406Nob4sBPAG0puBRyqBih_2nBVh_x7ABqwk1dGnGhB8arUGu1WgA/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(dataToSubmit),
          redirect: "follow",
        }
      );

      if (response.ok) {
        toast.success(
          selectedLang === "ar"
            ? "تم إرسال معلوماتك بنجاح."
            : "Your information has been submitted successfully."
        );
        form.reset();
        return setOpen(false);
      } else {
        toast.error(
          selectedLang === "ar"
            ? " حدث خطأ أثناء الإرسال. حاول مرة أخرى."
            : " An error occurred while sending. Please try again."
        );
      }
    } catch (error: unknown) {
      console.error("Submission error:", error);
      toast.error(
        selectedLang === "ar"
          ? " حدث خطأ أثناء الإرسال. حاول مرة أخرى."
          : " An error occurred while sending. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto pt-3">
      <div className="flex flex-col gap-2 mb-4">
        <CardTitle>{thisFormData.confirmation}</CardTitle>
        <CardDescription>
          {thisFormData.explain}
          <span className="capitalize font-semibold">"{plan}"</span>.
        </CardDescription>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{thisFormData.fullNameL}</FormLabel>
                  <FormControl>
                    <Input placeholder={thisFormData.fullNameP} {...field} />
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
                  <FormLabel>{thisFormData.emailL}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={thisFormData.emailP}
                      {...field}
                      className="const_direction"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{thisFormData.phoneL}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={thisFormData.phoneP}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{thisFormData.propertyTypeL}</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={
                            thisFormData.propertyTypeL || "Select a fruit"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {rushdData.categories.map((item) => (
                            <SelectItem
                              key={item.name}
                              value={item.name}
                              className="capitalize"
                            >
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{thisFormData.cityL}</FormLabel>
                  <FormControl>
                    <Input placeholder={thisFormData.cityP} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                selectedLang === "ar" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    يتم الإرسال
                  </>
                ) : (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                )
              ) : (
                thisFormData.submit
              )}
            </Button>
          </form>
        </Form>
      </div>
      {submitStatus && (
        <CardFooter>
          <p
            className={`text-sm ${
              submitStatus.type === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {submitStatus.message}
          </p>
        </CardFooter>
      )}
    </div>
  );
};

export default SubscriptionForm;
