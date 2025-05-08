import { useEffect, useState } from "react";
import { RushdContent } from "../translation/translation";

const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    window.navigator.language === "ar" ? RushdContent.ar : RushdContent.en
  );

  useEffect(() => {

    {/* The Setting In navbar Component */}
    const savedLanguage = localStorage.getItem("currentLanguage");
    const constDirection = document.querySelectorAll('.const_direction');

    if (savedLanguage === 'ar') {
      setCurrentLanguage(RushdContent.ar);
      document.documentElement.setAttribute("dir", "rtl");
      constDirection.forEach((element) => {
        element.setAttribute('dir', 'ltr');
      });
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.classList.remove('sm:text-left', 'lg:text-left', 'text-center', 'sm:text-left');
      document.documentElement.classList.add('sm:text-right');
    } else {
      setCurrentLanguage(RushdContent.en);
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.classList.remove('text-right');
      document.documentElement.classList.add('sm:*:text-left');
    }
  }, [currentLanguage]);

  return currentLanguage;
};

export default useLanguage;

// onscroll = () => {
//   if(document.getElementById("navbar_top_space")) {
//     const navbarTopSpace = document.getElementById("navbar_top_space") as HTMLElement;
//     if ( window.scrollY > 200) {
//       navbarTopSpace.classList.add("bg-[#ffffff77]")
//     } else {
//       navbarTopSpace.classList.remove("bg-[#ffffff77]");
//     }
//   }
// }