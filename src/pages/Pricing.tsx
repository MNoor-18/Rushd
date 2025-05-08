import { Title, PlanCard, CustomButton } from "../components";
import useLanguage from "../utils/utils";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Pricing = () => {

  const currentLanguage = useLanguage();

  const [activePlan, setActivePlan] = useState("starter");

  const pricingData = currentLanguage.pricingData;
  const aboutPlan = currentLanguage.pricingData.plans.find((plan) => plan.id === activePlan);

  return (
    <>

      <Helmet>
        <title>Pricing</title>
        <meta name="description" content="Rushd" />
        <meta name="keywords" content="Rusd real Home Hero website estate hotel Serviced apartments hotels chalets search ksa عقارات إجارات إستراحات موقع شقق مفروشة بحث رشد وحدات خاصة شاليهات " />
      </Helmet>

      <div data-aos="fade-down" className="w-fti min-h-screen padding-x pt-20 ">
        <Title theTitle={pricingData.title} titleStyle="text-3xl sm:text-5xl">
          <p className="text-lg sm:text-2xl font-bold">{pricingData.description}</p>
        </Title>

        <div className="w-full h-fit py-10 flex flex-col items-center gap-8 xl:flex-row md:justify-between xxl:justify-center xxl:gap-20">
          {/*############## ABOUT PLAN ##############*/}
          <div className="w-full sm:w-125 lg:w-[500px] h-full">
            <div className="w-full h-full rounded-xl bg-[#F6E7C6] py-6 px-2 sm:py-12 sm:px-10 flex flex-col gap-4 sm:gap-4 text-sm sm:text-lg font-semibold">
              <div>
                <h4 className="text-lg sm:text-2xl">{aboutPlan?.name}</h4>
                <h5 className="text-sm md:text-lg ">{aboutPlan?.clarification && `( ${aboutPlan.clarification} )`}</h5>
              </div>

              <div>
                <div className="text-xs sm:text-sm flex justify-between xl:flex-col">
                  <div>
                    <p>{aboutPlan?.price && `${pricingData.fees + " " + aboutPlan.price}`  }</p>
                    <p>{aboutPlan?.monthlyMinimum}</p>
                    <p>{aboutPlan?.duration}</p>
                    <p>{aboutPlan?.users}</p>
                    <p>{aboutPlan?.units}</p>
                  </div>

                  <div>
                    <h5 className="text-sm md:text-xl">{currentLanguage.pricingData.featureTitle}</h5>
                    <ul className="px-4 sm:px-8 list-disc">
                      {aboutPlan?.features?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {(aboutPlan?.optionalExtras && aboutPlan.optionalExtras.extras.length > 0) && (
                  <div className="pt-4 flex flex-col flex-wrap gap-2">
                    <h5>{aboutPlan?.optionalExtras.title}</h5>
                    <ul className="px-4 sm:px-8 list-disc">
                      {aboutPlan?.optionalExtras.extras.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/*############## PLANS  ##############*/}
          <div className="w-full md:w-fit lg:w-[500px] h-full flex justify-center gap-6">
            <div className="w-fit flex flex-col  items-end gap-6">
              {currentLanguage.pricingData.plans.map((plan) => (
                <PlanCard 
                key={plan.name} 
                name={plan.name} 
                price={plan.price} 
                duration={plan.duration}
                isActive={plan.id === activePlan}
                onSelect={() => {
                  setActivePlan(plan.id);
                }}
                />
              ))}

                <a href="#contact">
                  <CustomButton
                    label={currentLanguage.pricingData.theButton.label}
                    event={() => {}}
                    theStyle="w-full sel sm:w-xs py-4 xl:w-40 text-white md:py-2 bg-secondary"
                  />
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;