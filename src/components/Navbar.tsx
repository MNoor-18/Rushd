// import useLanguage from "../utils/utils";
import { FiMenu } from "react-icons/fi";
import { RushdContent } from "../translation/translation";
import { useState, useEffect } from "react";

const Navbar = () => {
  // ###################### HANDLE MENU ######################
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ###################### HANDLE LANGUAGE ######################
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("currentLanguage") === "ar"
      ? RushdContent.ar
      : RushdContent.en
  );
  const [language, setLanguage] = useState(currentLanguage || RushdContent.ar);

  useEffect(() => {
    setLanguage(currentLanguage || RushdContent.en);
    localStorage.setItem(
      "currentLanguage",
      currentLanguage == RushdContent.ar ? "ar" : "en"
    );
  }, [currentLanguage]);

  const langSelection = currentLanguage == RushdContent.ar ? "uk" : "sa";

  return (
    <header
      data-aos="fade-down"
      className="const_direction w-full h-20 sm:h-24 bg-white px-5 sm:px-10 shadow-md"
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="w-20 h-auto md:w-[102px] md:h-10 sm:w-[147px] sm:h-[58px]"
          aria-label="Home"
        >
          <img
            src="/assets/dark-logo.png"
            alt="Rushd Logo"
            className="w-full h-full object-cover"
          />
        </a>

        {/* Navbar Buttons */}
        <div className="flex items-center gap lg:gap-5">
          <nav className="hidden md:flex items-center gap-2 xl:gap-4">
            {language.navbarLinks.map((link) => (
              <a
                href={`#${link.id}`}
                key={link.id}
                className="py-0.5 px-1 md:py-2 md:px-3 text-sm md:text-base text-black cursor-pointer font-semibold rounded-md hover:bg-gray-200 active:bg-gray-300"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/*######## Auth Buttons #########*/}
          {/* <CustomButton label={langButton} theStyle="px-1 py-0.5 md:py-1 md:px-2 text-sm border bg-tertiary" event={() => {
          {/* <div className="flex gap-1 xl:gap-2">
            <CustomButton label="Sign up" theStyle="px-1 py-0.5 md:py-1 md:px-2 text-sm border bg-tertiary" event={() => {}} />
            <CustomButton label="Register" theStyle="px-1 py-0.5 md:py-1 md:px-2 text-sm bg-secondary text-white" event={() => {}} />
          </div> */}

          <div className="flex items-center gap-5">
                    
            {/* Language Selector */}
            <button
              className="h-6 p-1.5 flex items-center cursor-pointer md:h-fit md:p-0.5 bg-white"
              onClick={() => {
                setCurrentLanguage(
                  currentLanguage == RushdContent.ar
                    ? RushdContent.en
                    : RushdContent.ar
                );
                location.reload();
              }}
              >
                {langSelection ? (
                  <img 
                  className="w-7 lg:w-8" 
                  src={`/assets/${langSelection}.svg`} 
                  alt="language selector" />
                ) : (
                  "language"
                )
              }
              </button>
            
            {/* Mobile Menu Icon */}
            <FiMenu
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-3xl md:hidden cursor-pointer"
            />
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`fixed -z-10 left-0 top-0 w-screen h-screen bg-[#ffffffd2] transition-all duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-5">
              {language.navbarLinks.map((link) => (
                <a
                  href={`#${link.id}`}
                  key={link.id}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 us px-6 text-lg text-black cursor-pointer font-bold rounded-md hover:bg-gray-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
