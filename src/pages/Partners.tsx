import useLanguage from "../utils/utils";
import { Title, SliderButtons } from "../components/index";
import { useRef, useState, useEffect } from "react";

const Partners = () => {
    const currentLanguage = useLanguage();
    const partnersScroller = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const updateButtonsState = () => {
        const container = partnersScroller.current;
        if (!container) return;

        setAtStart(container.scrollLeft <= 10);
        setAtEnd(container.scrollLeft + container.clientWidth >= container.scrollWidth - 10);
    };

    useEffect(() => {
        const container = partnersScroller.current;
        if (!container) return;

        container.addEventListener('scroll', updateButtonsState);
        // Initial update
        updateButtonsState();

        return () => {
            container.removeEventListener('scroll', updateButtonsState);
        };
    }, []);

    const handlePrev = () => {
        if (partnersScroller.current) {
            partnersScroller.current.scrollLeft -= 300;
        }
    };

    const handleNext = () => {
        if (partnersScroller.current) {
            partnersScroller.current.scrollLeft += 300;
        }
    };

    return (
        <div data-aos="fade-left" className="w-full h-fit">
            {/* Title Section */}
            <div className="padding-x my-10">
                <Title theTitle={currentLanguage.partnersData.sectionTitle} titleStyle="text-3xl sm:text-5xl" />
            </div>

                {/* Partners Section */}
            <div className="const_direction w-full h-88 mt-8 padding-x overflow-hidden bg-tertiary flex flex-col">
                <div
                    data-aos="fade-left"
                    id="partners"
                    ref={partnersScroller}
                    className="w-full h-3/4 overflow-hidden scroll-smooth"
                >
                    <div className="w-fit h-full  flex items-center gap-40">
                        {currentLanguage.partnersData.partners.map((item) => (
                            <div key={item.name} className="flex items-center justify-center">
                                <img
                                    src={item.logoUrl}
                                    alt={item.name}
                                    className="max-h-20 max-w-40 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider Buttons */}
                <div className="h-1/4 w-full flex justify-end">
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

export default Partners;