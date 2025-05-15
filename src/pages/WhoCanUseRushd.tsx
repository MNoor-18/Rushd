import useLanguage from "../utils/utils";
import { Title } from "../components";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const WhoCanUseRushd = () => {
  const currentLanguage = useLanguage();
  const rushdData = currentLanguage.featuresData.whoCanUseRushd;

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  const [activeTab, setActiveTab] = useState("Hotels");

  return (
    <div className="h-fit py-16">
      <Helmet>
        <title>Rush</title>
        <meta name="description" content="Rushd" />
        <meta
          name="keywords"
          content="Rusd real Home Hero website estate hotel hotels chalets search ksa عقارات إجارات إستراحات موقع بحث رشد وحدات خاصة شاليهات "
        />
      </Helmet>

      {/* Title Section */}
      <div className="w-full h-fit padding-x">
        <Title theTitle={rushdData.title} titleStyle="text-3xl sm:text-4xl lg:text-5xl text-primary">
          <p className="text-lg sm:text-2xl font-bold text-gray-700 mt-2">
            {rushdData.description}
          </p>
        </Title>
      </div>

      {/* Tabs Section */}
      <div data-aos="zoom-in" className="w-full h-10 sm:h-12 md:h-17 mt-6 sm:px-10 md:px-14 xl:px-22 2xl:px-32 ">
        <div className="w-full h-full flex items-center justify-around md:rounded-xl bg-[#F6E7C6] shadow-md shadow-gray-400 flex-1">
          {rushdData.categories.map((item) => (
            <button
              className={`h-full flex-grow text-sm sm:text-lg md:text-xl whitespace-nowrap font-semibold rounded-lg text-center cursor-pointer transition-all ${
                activeTab === item.title
                  ? "bg-[#FBF4E2] shadow-md text-black"
                  : "text-gray-600"
              }
              `}
              onClick={() => setActiveTab(item.title)}
              key={item.name}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-fit my-4 flex">
        {rushdData.categories.map(
          (item) =>
            activeTab === item.title && (
              <div
                key={item.name}
                className="w-full flex flex-col xl:flex-row gap-10 lg:gap-5 items-center pt-2 md:pt-8 xl:items-start bg-white padding-x md:justify-between xxl:justify-center xxl:gap-20 "
              >
                {/* Text Section */}
                <div 
                data-aos={selectedLang === "ar" ? "fade-right" : "fade-left"} 
                className="h-full w-full xl:w-1/2 xl:w-lg ">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="mt-4 lg:px-2 text-sm sm:text-base md:text-lg text-gray-700">
                    {item.description}
                  </p>
                </div>

                {/* Image Section */}
                <div 
                data-aos={selectedLang === "ar" ? "fade-left" : "fade-right"} 
                className="w-full h-fit order-first pt-5 sm:w-lg">
                  <img
                    src={item.image}
                    className="w-full h-auto object-cover rounded-lg"
                    alt={`${item.name} image`}
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default WhoCanUseRushd;
