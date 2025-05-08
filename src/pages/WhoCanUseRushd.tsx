import useLanguage from "../utils/utils";
import { Title } from "../components";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const WhoCanUseRushd = () => {
  const currentLanguage = useLanguage();
  const rushdData = currentLanguage.featuresData.whoCanUseRushd;

  const [activeTab, setActiveTab] = useState("Hotels");

  return (
    <div data-aos="fade-up" className="h-fit py-16 ">

      <Helmet>
        <title>Rush</title>
        <meta name="description" content="Rushd" />
        <meta name="keywords" content="Rusd real Home Hero website estate hotel hotels chalets search ksa عقارات إجارات إستراحات موقع بحث رشد وحدات خاصة شاليهات " />
      </Helmet>

      {/* Title Section */}
      <div className="w-full h-fit padding-x">
        <Title theTitle={rushdData.title} titleStyle="text-3xl sm:text-5xl">
          <p className="text-lg sm:text-2xl font-bold text-gray-700 mt-2">
            {rushdData.description}
          </p>
        </Title>
      </div>

      {/* Tabs Section */}
      <div className="w-full h-17 mt-6 sm:px-10 md:px-14 xl:px-22 2xl:px-32 ">
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
      <div className="w-full h-fit my-4 padding-x flex  ">
        {rushdData.categories.map(
          (item) => activeTab === item.title && (
              <div
                key={item.name}
                className="w-full flex items-center justify-between bg-white padding-x "
              >
                {/* Text Section */}
                <div className="h-full w-full xl:pt-10 md:w-1/2 xl:w-lg ">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="mt-4 px-2 text-sm sm:text-base md:text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Image Section */}
                <div className="w-1/2 h-full pt-5 xl:w-xl">
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