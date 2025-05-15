import { useEffect, useState } from "react";
import { RushdContent } from "../translation/translation";

const useLanguage = () => {
  const getInitialLanguage = () => {
    const saved = localStorage.getItem("currentLanguage");
    if (saved) return saved;
    return window.navigator.language.startsWith("ar") ? "ar" : "en";
  };

  const langCode = getInitialLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(
    getInitialLanguage() === "ar" ? RushdContent.ar : RushdContent.en
  );

  useEffect(() => {
    const isArabic = langCode === "ar";

    // THE CONTENT LANGUAGE
    setCurrentLanguage(isArabic ? RushdContent.ar : RushdContent.en);

    // HANDLE DIRACTION
    document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", isArabic ? "ar" : "en");

    document.documentElement.style.fontFamily = isArabic
      ? "'Tajawal', sans-serif"
      : "'Inter', sans-serif";

    // CONST DIRACTION
    document.querySelectorAll(".const_direction").forEach((el) => {
      el.setAttribute("dir", "ltr");
    });

    // SAVE IN LOCALSTORAGE
    localStorage.setItem("currentLanguage", langCode);
  }, [langCode]);

  return currentLanguage;
};

export default useLanguage;
