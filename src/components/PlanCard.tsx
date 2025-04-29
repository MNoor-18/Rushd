import { PlanCardProps } from "../types";

const PlanCard = ({ name, price, isActive, onSelect }: PlanCardProps) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full xl:w-125 p-3 flex items-center justify-between xl:p-6 rounded-xl shadow-gray-400 shadow-md transition-all 
          duration-300 ${isActive ? "bg-black text-white" : "bg-[#FBF4E2] text-black"}
      `}
    >
      <div className="w-full flex items-center justify-between *:w-fit">
        <h3 className="text-start px-2 text-sm sm:text-sm  xl:text-xl lg:text-2xl font-bold">
          {name}
        </h3>

        {price !== "Deal" && (
          <span className="text-xs xl:text-xl lg:text-2xl font-bold">{price}</span>
        )}

        {price === "Deal" && (
          <span className="text-lg xl:text-2xl lg:text-5xl font-bold">{price}</span>
        )}
      </div>

      <div className="flex items-center">
        <div
          className={`w-6 h-6 mx-5 sm:w-8 sm:h-8 rounded-full border-2 ${
            isActive ? "bg-orange-500 border-orange-500" : "border-gray-400"
          }`}
        />
      </div>
    </button>
  );
};

export default PlanCard;