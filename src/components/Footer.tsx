import useLanguage from "../utils/utils";
import { BiSend } from "react-icons/bi";
import { useState } from "react";
import toast from "react-hot-toast";
import { rushdPolicy } from "../translation/translation";

const Footer = () => {
  const currentLanguage = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showPolicy, setShowPolicy] = useState(false);

  const [isloading, setIsLoading] = useState(false);

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  const policyContent = selectedLang === "ar" ? rushdPolicy.ar : rushdPolicy.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwbHv5JEmLuBz4juABEC4pOWuwvEHv4_7G5VkCSt6Ay-jgYKggp4iCZnCnhvKVXsVwIZw/exec",
        {
          method: "POST",
          body: JSON.stringify({ email }),
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
            ? " تم الاشتراك بنجاح!"
            : " Subscription successful!"
        );
        setEmail("");
      } else {
        toast.error(
          selectedLang === "ar"
            ? " فشل الاشتراك. حاول مرة أخرى."
            : " Subscription failed. Please try again."
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(
        selectedLang === "ar"
          ? " فشل الاشتراك. حاول مرة أخرى."
          : " Something went wrong"
      );
    }
    setIsLoading(false);
  };

  return (
    <footer className="w-full flex items-center bg-primary padding-x py-12">

      {/* SHOW POLICY */}
      {showPolicy && (
      <div className="w-screen h-screen fixed inset-0 z-[100]" >
        <div className="w-full h-full flex flex-col padding-x bg-white">
          <div className="relative order-last lg:order-first py-2 lg:py-5 left-0 flex justify-center">
            <button
              onClick={() => setShowPolicy(false)}
              className="bg-black hover:bg-gray-800 cursor-pointer px-8 py-2 rounded-md md:px-4 md:py-2 text-white font-bold sm:text-xl"
            >
              {policyContent.close}
            </button>
          </div>

            {/* Policy Content */}
          <div className="overflow-y-scroll py-10 ">
            <h1 className="font-semibold">{policyContent.title}</h1>
            {policyContent.description.map((desc) => (
              <p key={desc} className="text-sm text-gray-700 mt-2">
                {desc}
              </p>
            ))}

            {policyContent.paragraphs.map((para) => (
              <div key={para.title} className="mt-4">
                <h2 className="text-lg font-semibold">{para.title}</h2>
                {para.description && (
                  <p className="text-sm text-gray-700 mt-2">{para.description}</p>
                )}
                <ul className="px-2">
                  {para.content.map((content) => (
                    <li key={content} className="text-sm list-disc text-gray-700 mt-2">
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    )}

      {/* FOOTER CONTENT */}
      <div className="w-full h-full flex flex-col md:flex-wrap gap-3 items-center justify-center md:flex-row md:gap-8 md:justify-between ">
        {/* FOOTER LOGO SECTION */}
        <div className="w-fit flex items-center sm:items-start">
          <div className="w-36 h-14">
            <img src="./assets/white-logo.png" alt="Logo" />
          </div>
        </div>

        {/* FOOTER Form SECTION */}
        <div className="const_direction lg:flex-1 sm:w-1/2 lg:w-1/3 flex flex-col items-center">
          <div className="lg:flex gap-3 flex-wrap justify-center">
            {currentLanguage.navbarLinks.map((link) => (
              <a href={`#${link.id}`} key={link.id}>
                <span className="py-1 px-2 text-white hover:underline">
                  {link.title}
                </span>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 h-full w-full max-w-md">
            <label
              htmlFor="subscribe-input"
              className="text-white text-xs font-semibold text-start"
            >
              {currentLanguage.formData.subscribe}
            </label>

            <div className="w-full mt-1 flex bg-white rounded-md overflow-hidden">
              <input
                id="subscribe-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 py-2 px-2 text-sm text-start outline-none"
                placeholder={currentLanguage.formData.placeholders.email}
              />
              <button
                type="submit"
                disabled={isloading}
                className="w-21 bg-black text-white text-sm flex gap-0.5 items-center justify-center"
              >
                {isloading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-[1px] md:border-2 border-white border-t-transparent" />
                ) : (
                  <div className="flex">
                    <span>{currentLanguage.formData.send}</span>
                    <BiSend className="text-white text-xl" />
                  </div>
                )}
              </button>
            </div>

            <p className="h-2 mt-2 text-xs text-white text-center">
              {message && message}
            </p>
          </form>
        </div>

        {/* FOOTER Social Icons SECTION */}
        <div className="w-full lg:w-fit md:self-center flex flex-col items-center lg:items-end gap-6">
          <div className="flex gap-4">
            {currentLanguage.socialLinks.map((item) => (
              <a
                target="_blank"
                href={item.url}
                key={item.url}
                title={item.name}
                className="w-8 h-8 flex items-center justify-center rounded-sm"
              >
                <img src={item.imageUrl} alt={item.name} className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex gap-4 text-white text-sm">
            <p onClick={() => setShowPolicy(!showPolicy)} className="cursor-pointer hover:underline">
              {currentLanguage.legalDocuments.termsAndConditions}
            </p>

            <p onClick={() => setShowPolicy(!showPolicy)} className="cursor-pointer hover:underline">
              {currentLanguage.legalDocuments.privacyPolicy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;