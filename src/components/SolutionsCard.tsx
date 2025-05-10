import { SolutionsCardProps } from "../types";

const SolutionsCard = ({ theTitle, description }: SolutionsCardProps) => {

  const selectedLang = localStorage.getItem("currentLanguage") || "ar";

  return (
    <div data-aos={selectedLang === "ar" ? "fade-right" : "fade-left"} className="w-full h-fit min-h-18 bg-tertiary border-[1px] rounded-xl flex flex-wrap items-center p-4 gap-4">
      <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-secondary">
        <img
          src="/assets/check-small.png"
          width="20px"
          height="20px"
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