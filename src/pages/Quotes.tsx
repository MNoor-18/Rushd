import useLanguage from "../utils/utils";
import { Title, FeedbackCard, SliderButtons } from "../components/index";
import { useRef, useState, useEffect } from "react";

const Quotes = () => {
    const currentLanguage = useLanguage();
    const feedbacksScroller = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const updateButtonsState = () => {
        const container = feedbacksScroller.current;
        if (!container) return;

        setAtStart(container.scrollLeft <= 0);
        setAtEnd(container.scrollLeft + container.clientWidth >= container.scrollWidth);
    };

    useEffect(() => {
        const container = feedbacksScroller.current;
        if (!container) return;

        container.addEventListener('scroll', updateButtonsState);
        // Initial 
        updateButtonsState();

        return () => {
            container.removeEventListener('scroll', updateButtonsState);
        };
    }, []);

    const handlePrev = () => {
        if (feedbacksScroller.current) {
            feedbacksScroller.current.scrollLeft -= 323;
        }
    };

    const handleNext = () => {
        if (feedbacksScroller.current) {
            feedbacksScroller.current.scrollLeft += 323;
        }
    };

    return (
        <div data-aos="fade-up" className="w-full h-fit">
            {/* Title Section */}
            <div className="my-8 padding-x">
                <Title theTitle={currentLanguage.quotesData.sectionTitle} titleStyle="text-3xl sm:text-5xl" />
            </div>

            {/* Feedback Section */}
            <div className="const_direction w-full h-fit py-10 overflow-hidden padding-x bg-primary flex flex-col">
                <div
                    data-aos="fade-left"
                    ref={feedbacksScroller}
                    className="w-full h-full flex overflow-hidden scroll-smooth"
                >
                    <div className="w-fit flex items-center justify-center gap-6 sm:gap-10">
                        {currentLanguage.quotesData.feedbacks.map((item, index) => (
                            <FeedbackCard
                                key={item.comment}
                                active={index % 2 === 0}
                                name={item.name}
                                rating={item.rating}
                                comment={item.comment}
                                imageUrl={item.imageUrl}
                            />
                        ))}
                    </div>
                </div>

                {/* Slider Buttons */}
                <div className="flex h-14 w-full justify-end mt-4">
                    <SliderButtons
                        onPrev={handlePrev}
                        onNext={handleNext}
                        atStart={atStart}
                        atEnd={atEnd}
                    />
                </div>
            </div>
        </div>
    );
};

export default Quotes;