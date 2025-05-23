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
    .regex(phoneRegex, { message: "Please enter a valid mobile number." })
    .optional()
    .or(z.literal("")), // Allows empty string or to be undefined
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters." })
    .max(50)
    .optional()
    .or(z.literal("")), // Allows empty string or to be undefined
});

type SubscriptionFormValues = z.infer<typeof SubscriptionFormSchema>;

interface SubscriptionFormProps {
  plan: string; // The plan the user is interested in
  formTitle?: string;
  formDescription?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ plan }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(SubscriptionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      city: "",
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
        "https://script.google.com/macros/s/AKfycbxPOhHVM4FVMwd__tiXBhZ4F-_CKcZyHP83gNmg0W3WYUHznb8HDCTE0o1XnFvGaw4QZQ/exec",
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
        return toast.success(
          "Your information has been submitted successfully."
        );
      } else {
        toast.error(
          selectedLang === "ar"
            ? " حدث خطأ أثناء الإرسال. حاول مرة أخرى."
            : " An error occurred while sending. Please try again."
        );
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your information has been submitted successfully.",
      });
      form.reset(); // Reset form fields on successful submission
    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Failed to submit the form. Please check your connection and try again.",
      });
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred while submitting the form.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-2 mb-4">
        <CardTitle>Interested in this Plan?</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get in touch with you regarding
          the&nbsp;
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
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
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
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1234567890" {...field} />
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
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Your City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Information"
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
