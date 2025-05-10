import useLanguage from "../utils/utils";
import { Title, ProblemCard, Solutions } from "../components";
import { Helmet } from "react-helmet-async";

const Features = () => {
  const currentLanguage = useLanguage();
  return (
    <div className="w-full padding-x py-10 ">

      <Helmet>
              <title>Rushd</title>
              <meta name="description" content="Rushd" />
              <meta name="keywords" content="Rusd real Home Hero website estate hotel Serviced apartments hotels chalets search ksa عقارات إجارات إستراحات موقع شقق مفروشة بحث رشد وحدات خاصة شاليهات " />
      </Helmet>

      <Title
        theTitle={currentLanguage.featuresData.problemsNowadays.title}
        titleStyle="text-2xl sm:text-3xl md:text-5xl max-w-full md:max-w-[250px]"
      />

      <div className="w-full min-h-[470px] mt-6 flex flex-wrap gap-6 items-center justify-center md:justify-between">
        {currentLanguage.featuresData.problemsNowadays.content.map((item) => (
          <ProblemCard
            number={`0${item.id}`}
            numStyle={`${item.numStyle}`}
            bgColor={item.bgColor}
            title={item.title}
            theExplanation={item.description}
            textColor={item.textColor}
            key={item.id}
          />
        ))}
      </div>

      <Solutions />
    </div>
  );
};

export default Features;