import { SolutionsCardProps } from "../types";

const SolutionsCard = ({ theTitle, description }: SolutionsCardProps) => {

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  return (
    <div data-aos={selectedLang === "ar" ? "fade-right" : "fade-left"} className="w-full h-fit min-h-18 bg-tertiary border-[1px] rounded-xl flex flex-wrap lg:flex-nowrap items-center p-4 gap-4">
      <div className="w-7 h-7 xl:w-[30px] xl:h-[30px] flex items-center justify-center rounded-full bg-secondary">
        <img
          src="/assets/check-small.png"
          className="w-4 h-4 xl:w-5 xl:h-5"
          alt="check"
        />
      </div>
      <div>
        <p className="text-lg sm:text-xl md:text-2xl">
          <span className="font-bold">{theTitle}</span>
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default SolutionsCard;