import useLanguage from "../utils/utils";
import { SolutionsCard } from "./index";
import { Title } from "./index";

const Solutions = () => {
  const currentLanguage = useLanguage();

  return (
    <div id="features"  className="w-full h-fit pt-10 scroll-mt-20 sm:scroll-mt-29">
      <Title
        theTitle={currentLanguage.featuresData.solutions.title}
        titleStyle="text-3xl sm:text-5xl"
      />
      <div className="w-full h-fit flex flex-col mt-10 gap-6">
        {currentLanguage.featuresData.solutions.content.map((item) => (
          <SolutionsCard
            key={item.id}
            theTitle={`${item.title}: `}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
