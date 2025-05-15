import { PlanCardProps } from "../types";

const PlanCard = ({ name, price, isActive, onSelect }: PlanCardProps) => {
  return (
    <div data-aos="zoom-in" className="w-full">
      <button
        onClick={onSelect}
        className={`w-full sm:w-md xl:w-125 px-4 py-3 flex items-center justify-between lg:px-6 lg:py-5 rounded-md lg:rounded-xl shadow-gray-300 shadow-md transition-all 
          duration-300 ${isActive ? "bg-black text-white" : "bg-[#FBF4E2] text-black"}
        `}
      >
        <div className="w-full flex items-center justify-between *:w-fit">
          <h3 className="text-start text-sm md:text-base lg:text-xl xl:2xl font-bold">
            {name}
          </h3>

          <span className="text-xs md:text-sm lg:text-base xl:text-xl font-semibold xl:font-bold">
            {price}
          </span>
        </div>

        <div className="h-3 w-4 xl:w-6" />
        <div
          className={`w-5 h-5 md:w-6 md:h-6 sm:w-8 sm:h-8 rounded-full border-2 ${
            isActive ? "bg-orange-500 border-orange-500" : "border-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default PlanCard;