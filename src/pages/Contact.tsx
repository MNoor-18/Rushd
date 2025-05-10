import { Helmet } from "react-helmet-async";
import useLanguage from "../utils/utils";
import { Title } from "../components";
import { useState } from "react";
import { FormData } from "../types";
import toast from "react-hot-toast";

const Contact = () => {
  const currentLanguage = useLanguage();

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): Record<string, string> => {
    const validationErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      validationErrors.name =
        selectedLang === "ar"
          ? " يرجى إدخال الاسم."
          : " Please enter your name.";
    }
    if (!formData.surname.trim()) {
      validationErrors.surname =
        selectedLang === "ar"
          ? " يرجى إدخال اسم العائلة."
          : " Please enter your surname.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email =
        selectedLang === "ar"
          ? " يرجى إدخال بريد إلكتروني صالح."
          : " Please enter a valid email.";
    }
    if (!formData.message.trim()) {
      validationErrors.message =
        selectedLang === "ar"
          ? " يرجى إدخال الرسالة."
          : " Please enter your message.";
    }

    return validationErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx1zZpVb1GaBY3ocauyvQJ011lWU75f5cEn5ncquCm3KkExD6jf6vQqZr_TL6BeTR14NQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "cors",
          redirect: "follow",
        }
      );

      if (response.ok) {
        toast.success(
          selectedLang === "ar"
            ? " تم إرسال رسالتك بنجاح!"
            : " Your message has been sent successfully!"
        );
        setFormData({ name: "", surname: "", email: "", message: "" });
      } else {
        toast.error(
          selectedLang === "ar"
            ? " حدث خطأ أثناء الإرسال. حاول مرة أخرى."
            : " An error occurred while sending. Please try again."
        );
      }
    } catch (error) {
      console.error("خطأ في الإرسال:", error);
      toast.error(
        selectedLang === "ar"
          ? " تعذر الإرسال بسبب مشكلة في الاتصال."
          : " Failed to send due to a connection issue."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen h-fit py-4 lg:py-16 flex flex-col items-center gap-10 padding-x sm:p4-10 lg:flex-row lg:items-start "
    >
      <Helmet>
        <title>Rushd</title>
        <meta name="description" content="Rushd" />
        <meta
          name="keywords"
          content="Rusd real Home Hero Serviced apartments website estate hotel hotels chalets search ksa عقارات إجارات إستراحات موقع شقق مفروشة بحث رشد وحدات خاصة شاليهات "
        />
      </Helmet>

      {/* Sign Section */}
      <div className="w-full lg:w-1/2 pt-5 flex flex-col items-center lg:items-start">
        <Title
          theTitle={currentLanguage.contact.title}
          titleStyle="text-3xl sm:text-5xl lg:text-7xl text-primary"
        >
          <p className="text-sm sm:text-lg font-bold mt-2">
            {currentLanguage.contact.description}
          </p>
        </Title>

        <div data-aos="fade-up" className="mt-8 md:mt-14 px-5 sm:px-10">
          <img
            className=" h-25 w-25 md:h-40 md:w-40 sm:h-52 sm:w-52 lg:h-82 lg:w-76 object-contain"
            src="./assets/rushd-sign.png"
            alt="Rushd Logo"
          />
        </div>
      </div>

      {/* Form Section */}
      <div data-aos="fade-up" className="w-full lg:w-1/2 md:pt-12 flex justify-center lg:justify-end">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg min-h-fit md:h-140 border-gray-400 border-[1px] rounded-lg py-6 px-5 sm:py-8 sm:px-7 flex flex-col gap-5"
        >
          {/* Name Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">
              {currentLanguage.formData.theName}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className={`w-full h-10 border-[1px] rounded-lg mt-1 px-2 ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
              placeholder={currentLanguage.formData.placeholders.theName}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Surname Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">
              {currentLanguage.formData.surName}
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              className={`w-full h-10 border-[1px] rounded-lg mt-1 px-2 ${
                errors.surname ? "border-red-500" : "border-gray-400"
              }`}
              placeholder={currentLanguage.formData.placeholders.surName}
              onChange={handleChange}
            />
            {errors.surname && (
              <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">
              {currentLanguage.formData.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className={`w-full h-10 border-[1px] rounded-lg mt-1 px-2 ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
              placeholder={currentLanguage.formData.placeholders.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">
              {currentLanguage.formData.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              className={`w-full h-20 min-h-10 max-h-32 border-[1px] rounded-lg mt-1 p-2 ${
                errors.message ? "border-red-500" : "border-gray-400"
              }`}
              placeholder={currentLanguage.formData.placeholders.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-10 rounded-lg mt-1 flex justify-center items-center bg-primary text-white hover:bg-primary-dark transition"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-[1px] md:border-2 border-white border-t-transparent" />
            ) : (
              currentLanguage.formData.submit
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
