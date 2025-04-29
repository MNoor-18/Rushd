import { TitlesProps } from "../types"

const Titles = ({theTitle, titleStyle, children}: TitlesProps) => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-1 ">
      <span className="w-20 h-2 md:w-[101px] md:h-3 rounded-full bg-secondary" />
      <h1 className={`font-bold ${titleStyle}`}>
        {theTitle}
      </h1>
      {children}
    </div>
  )
}

export default Titles