import { Title, PlanCard, CustomButton } from "../components";
import useLanguage from "../utils/utils";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
  const currentLanguage = useLanguage();

  const [activePlan, setActivePlan] = useState("basic");

  const pricingData = currentLanguage.pricingData;
  const aboutPlan = currentLanguage.pricingData.plans.find(
    (plan) => plan.id === activePlan
  );

  return (
    <>
      <Helmet>
        <title>Pricing</title>
        <meta name="description" content="Rushd" />
        <meta
          name="keywords"
          content="rusd real Home Hero website estate hotel Serviced apartments hotels chalets search ksa عقارات إجارات إستراحات موقع شقق مفروشة بحث رشد وحدات خاصة شاليهات "
        />
      </Helmet>

      <div className="w-full padding-x py-10 ">
        <Title theTitle={pricingData.title} titleStyle="text-3xl sm:text-4xl lg:text-5xl text-primary">
          <p className="text-lg sm:text-2xl font-bold">
            {pricingData.description}
          </p>
        </Title>

        <div className="w-full min-h-full py-10 flex flex-col items-center gap-8 xl:flex-row lg:justify-between 3xl:justify-center 3xl:gap-20">

          {/*############## ABOUT PLAN ##############*/}
          <div data-aos="zoom-out" className="w-full sm:w-125 lg:w-full xl:w-[500px] h-full">
            <div className="w-full h-full rounded-md bg-[#F6E7C6] py-6 px-4 sm:py-10 sm:px-10 flex flex-col gap-4 sm:gap-5 text-sm sm:text-lg font-semibold">

              <div className="border-b-[1px]">
                <h4 className="text-lg sm:text-2xl">{aboutPlan?.name}</h4>
                <h5 className="text-sm md:text-lg ">
                  {aboutPlan?.clarification && `( ${aboutPlan.clarification} )`}
                </h5>
              </div>

              <div>
                <div className="text-xs sm:text-sm flex flex-col gap-2 md:gap-5 lg:flex-row lg:justify-between xl:flex-col xl:justify-start">
                  <div>
                    <p>{aboutPlan.price.monthly && aboutPlan.price.monthly}</p>
                    <p>{aboutPlan.price.annual && aboutPlan.price.annual}</p>
                    <p>{aboutPlan.users && aboutPlan.users}</p>
                    <p>{aboutPlan.units && aboutPlan.units}</p>
                  </div>

                  <div>
                    <h5 className="text-sm md:text-xl">
                      {currentLanguage.pricingData.featureTitle}
                    </h5>
                    <ul className="px-4 sm:px-8 list-disc">
                      {aboutPlan?.features?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                {aboutPlan?.optionalExtras &&
                  aboutPlan.optionalExtras.extras.length > 0 && (
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
          <div className="w-full lg:w-[500px] h-full flex justify-center gap-6">
            <div className="w-full sm:w-fit flex flex-col items-end gap-6">
              {currentLanguage.pricingData.plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  name={plan.name}
                  price={plan.price.monthly}
                  isActive={plan.id === activePlan}
                  onSelect={() => {
                    setActivePlan(plan.id);
                  }}
                />
              ))}

              <a data-aos="zoom-out" href="#contact" className="w-full">
                <CustomButton
                  label={currentLanguage.pricingData.theButton.label}
                  event={() => {}}
                  theStyle="w-full py-3 xl:py-4 xl:w-40 text-white bg-secondary"
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
