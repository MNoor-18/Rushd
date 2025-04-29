import { FeedbackCardProps } from "../types";

const FeedbackCard = ({ name, rating, comment, active, imageUrl = "/assets/user.jpg" }: FeedbackCardProps) => {
    return (
        <div
            className={`rounded-xl py-5 px-6 sm:py-6 sm:px-8 w-[300px] sm:w-[350px] h-56 flex flex-col gap-4 ${
                active
                    ? "bg-[#FBF4E2]"
                    : "bg-[#1B1B1B] text-white border border-white"
            }`}
            >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300">
                    <img
                        src={imageUrl}
                        className="w-full h-full rounded-full object-cover"
                        alt="User"
                    />
                </div>

                <div className="font-bold text-sm sm:text-base">{name}</div>

                <div className="ml-auto text-sm sm:text-base font-bold flex items-center gap-1">
                    {rating}{" "}
                    <img
                        src={`./public/assets/${active ? "dark_star" : "star"}.png`}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        alt="Rating"
                    />
                </div>
            </div>

            <p className="text-sm sm:text-base leading-snug mt-2">{comment}</p>
        </div>
    );
};

export default FeedbackCard;