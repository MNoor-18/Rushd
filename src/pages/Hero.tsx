import useLanguage from "../utils/utils";
import { CustomButton } from "../components";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const currentLanguage = useLanguage();

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  return (
    <div className="w-full min-h-screen h-fit pt-20 md:pt-24 relative overflow-hidden bg-gradient-to-r from-[#1C1C1C] via-[#1c1c1cfe] to-[#1c1c1cf8] ">

      <Helmet>
        <title>Home</title>
        <meta name="description" content="Rushd" />
        <meta
          name="keywords"
          content="Rusd real Home Hero website estate hotel hotels Serviced apartments chalets search ksa عقارات إجارات إستراحات شقق مفروشة موقع بحث رشد وحدات خاصة شاليهات "
        />
      </Helmet>

      {/* BACKGROUND OF HERO SECTION */}
      <div className="w-full h-full absolute left-0 top-0 -z-10 bg-[url('https://rushd.tech/assets/hero-bg.jpg')] bg-cover " />

      <div
        className="w-full h-screen padding-x flex flex-col justify-center gap-5 items-center lg:flex-row lg:items-center lg:justify-between"
      >

        {/* Text Side */}
        <div data-aos={selectedLang === "ar" ? "fade-left" : "fade-right"} className="max-w-full order-last lg:order-first flex flex-col items-center lg:items-start gap-8 text-white">
          <h1 className="text-4xl text-center lg:leading-20 lg:text-start font-semibold md:text-5xl md:max-w-[650px] xl:text-[64px] ">
            {currentLanguage.heroData.title}
          </h1>

          <h3 className="max-w-[500px] text-center text-2xl font-semibold lg:text-left">
            <span>{`${currentLanguage.heroData.subtitle1} `}</span>
            <span className="bg-[#F9F5EC] p-0.5 text-black">
              {currentLanguage.heroData.subtitle2}
            </span>
          </h3>

          <div className="w-[500px] flex justify-center">
            <a href="#pricing">
              <CustomButton
                label={currentLanguage.heroData.buttonText}
                theStyle="w-60 h-[43px] px-18 bg-secondary text-white shadow-sm shadow-[#FF5A1F] "
                event={() => {}}
              >
                <img
                  src="./assets/tap.png"
                  width="34px"
                  height="34px"
                  className="right-3 "
                  alt="tap"
                />
              </CustomButton>
            </a>
          </div>
        </div>

        {/* Logo Side */}
        <div data-aos={selectedLang === "ar" ? "fade-right" : "fade-left"} className="h-50">
          <div className="w-70 h-auto sm:w-80 xl:w-[430px] ">
            <img
              className="h-full w-full"
              src="./assets/white-logo.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
