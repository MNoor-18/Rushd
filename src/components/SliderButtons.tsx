import { SliderButtonsProps } from "../types";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderButtons = ({ onPrev, onNext, atStart, atEnd }: SliderButtonsProps) => {
    return (
        <div className="w-fit flex justify-between items-center gap-2">
            <button
                onClick={atStart ? undefined : onPrev}
                className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer flex items-center justify-center transition "
                aria-label="Previous"
            >
                <FaArrowLeft className={`text-2xl lg:text-4xl ${atStart ? "text-gray-600" : "text-gray-400"}`} />
            </button>

            <button
                onClick={atEnd ? undefined : onNext}
                className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer flex items-center justify-center transition "
                aria-label="Next"
            >
                <FaArrowRight className={`text-2xl lg:text-4xl ${atEnd ? "text-gray-600" : "text-gray-400"}`} />
            </button>
        </div>
    );
};

export default SliderButtons;