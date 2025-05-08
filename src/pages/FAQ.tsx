import useLanguage from "../utils/utils";
import { useState } from "react";
import { Title } from "../components";

const FAQ = () => {
    const currentLanguage = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

  return (
    <section data-aos="fade-right" className="w-full padding-x py-12 px-4">
      <Title theTitle={currentLanguage.faqData.sectionTitle} titleStyle="text-4xl font-semibold">
        <h4 className="text-4xl font-semibold text-gray-500 ">{currentLanguage.faqData.sectionSubtitle}</h4>
      </Title>

      <div className="mt-8 space-y-5">

        {currentLanguage.faqData.questions.map((item, index) => (
          <div key={index}
            className={`${activeIndex === index ? "bg-whit border-black" :"bg-tertiary border-gray-300"} border-gray-300 border-[1px] rounded-lg transition-all`}
          >
            <button onClick={() => toggle(index)}
              className="w-full px-4 py-3 flex justify-between items-center font-medium text-[16px] "
              >

              {item.question}
              <span><img src="./public/assets/chevron.png" className={`w-2.5 h-2.5 ${activeIndex === index ? "rotate-180" : ""} `} alt="chevron" /></span>

            </button>

            {activeIndex === index && (
              <div className="px-4 pb-4 text-[16px]">{item.answer}</div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

export default FAQ