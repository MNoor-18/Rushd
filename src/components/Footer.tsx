import useLanguage from "../utils/utils";
import { BiSend } from "react-icons/bi";
import { useState } from "react";

const Footer = () => {
  const currentLanguage = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isloading, setIsLoading] = useState(false);

  const selectedLang = localStorage.getItem("currentLanguage");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwGGv9cCYFj_HZuiIBWKHOZHT9BwltfnR25ZQrjeW2Oxf4csufpWhhkUItCjqfszs9czQ/exec",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setMessage(
          selectedLang === "ar"
            ? "✅ تم الاشتراك بنجاح!"
            : "✅ Subscription successful!"
        );
        setEmail("");
      } else {
        setMessage(
          selectedLang === "ar"
            ? "❌ فشل الاشتراك. حاول مرة أخرى."
            : "❌ Subscription failed. Please try again."
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage(
        selectedLang === "ar"
          ? "❌ فشل الاشتراك. حاول مرة أخرى."
          : "❌ Subscription failed. Please try again."
      );
    }
    setIsLoading(false);
  };

  return (
    <footer className="w-full bg-primary padding-x py-12">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap md:flex-nowrap xl:flex-nowrap sm:justify-between ">
        {/* FOOTER RIGHT SECTION */}
        <div className="w-fit flex flex-col items-center sm:items-start">
          <div className="w-36 h-14">
            <img src="./assets/white-logo.png" alt="Logo" />
          </div>

          <div className="mt-6 text-xs text-white text-center sm:text-start max-w-[200px]">
            <p>{currentLanguage.contact.description}</p>
          </div>
        </div>

        {/* FOOTER Form SECTION */}
        <div className="const_direction flex-1 sm:w-1/2 lg:w-1/3 flex flex-col items-center">
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
        <div className="w-fit flex flex-col items-center lg:items-end gap-6">
          <div className="flex gap-4">
            {currentLanguage.socialLinks.map((item) => (
              <a
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
            <p className="cursor-pointer hover:underline">
              {currentLanguage.legalDocuments.termsAndConditions}
            </p>
            <p className="cursor-pointer hover:underline">
              {currentLanguage.legalDocuments.privacyPolicy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
