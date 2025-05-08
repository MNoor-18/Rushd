import { ProblemCardProps } from "../types";

const ProblemCard = ({number, bgColor, textColor, title, theExplanation, numStyle}: ProblemCardProps) => {
  return (
    <div className={`w-full min-h-fit h-[220px] md:w-[315px] md:h-[380px] rounded-xl flex flex-col gap-2 py-8 md:py-14 px-8 ${textColor} ${bgColor}`}>
        <div className="flex-1">
            <span className={`text-4xl md:text-5xl font-extrabold text-transparent ${numStyle} mb-0.5 ${textColor}`}>{number}</span>
            <h2 className="text-2xl md:text-[32px] font-semibold max-w-[200px]">{title}</h2>
        </div>
        <div className="flex-1/2 flex items-end ">
            <p className="text-xl md:text-2xl font-semibold">{theExplanation}</p>
        </div>
    </div>
  )
}

export default ProblemCard