import useLanguage from "../utils/utils";
import { useState } from "react";
import { Title } from "../components";

// Set-ExecutionPolicy RemoteSigned


const FAQ = () => {
  const currentLanguage = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  return (
    <section data-aos="fade-right" className="w-full padding-x py-10 px-4">
      <Title
        theTitle={currentLanguage.faqData.sectionTitle}
        titleStyle="text-3xl sm:text-4xl text-primary font-semibold"
      >
        <h4 className="text-4xl font-semibold text-gray-500 ">
          {currentLanguage.faqData.sectionSubtitle}
        </h4>
      </Title>

      <div 
        className="mt-8 space-y-5">
        {currentLanguage.faqData.questions.map((item, index) => (
          <div key={item.question} data-aos={selectedLang === "ar" ? "fade-right" : "fade-left"}>
            <div
              className={`${
                activeIndex === index
                  ? "bg-whit border-black"
                  : "bg-tertiary border-gray-300"
              } border-gray-300 border-[1px] rounded-lg transition-all`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-4 py-3 flex justify-between items-center font-medium text-sm text-start sm:text-[16px] xl:text-lg"
              >
                <p className="flex-1 px-1">{item.question}</p>
                <span className="">
                  <img
                    src="./assets/chevron.png"
                    className={`w-3 h-3 ${
                      activeIndex === index ? "rotate-180" : ""
                    } `}
                    alt="chevron"
                  />
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-4 text-[16px]">{item.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
