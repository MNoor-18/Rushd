import { Title } from "../components";
import useLanguage from "../utils/utils";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const currentLanguage = useLanguage();

  return (
    <div className="w-full min-h-screen h-fit py-4 flex flex-col items-center gap-10 padding-x sm:p4-10 lg:flex-row ">

      <Helmet>
        <title>Rushd</title>
        <meta name="description" content="Rushd" />
        <meta name="keywords" content="Rusd real Home Hero Serviced apartments website estate hotel hotels chalets search ksa عقارات إجارات إستراحات موقع شقق مفروشة بحث رشد وحدات خاصة شاليهات " />
      </Helmet>

      {/* Left Section */}
      <div className="w-full lg:w-1/2 pt-5 flex flex-col items-center lg:items-start">
        <Title theTitle={currentLanguage.contact.title} titleStyle="text-3xl sm:text-5xl lg:text-7xl text-primary" >
          <p className="text-sm sm:text-lg font-bold mt-2">
            {currentLanguage.contact.description}
          </p>
        </Title>

        <div className="mt-8 md:mt-14 px-5 sm:px-10">
          <img
            className=" h-25 w-25 md:h-40 md:w-40 sm:h-52 sm:w-52 lg:h-82 lg:w-76 object-contain"
            src="./public/assets/rushd-sign.png"
            alt="Rushd Logo"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 md:pt-12 flex justify-center lg:justify-end">
        <form
          onSubmit={() => {}}
          className="w-full max-w-lg h-fit md:h-140 border-gray-400 border-[1px] rounded-lg py-6 px-5 sm:py-8 sm:px-7 flex flex-col gap-5"
        >
          {/* Name Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">{currentLanguage.formData.theName}</label>
            <input
              type="text"
              className="w-full h-10 border-gray-400 border-[1px] rounded-lg mt-1 px-2"
              placeholder={currentLanguage.formData.placeholders.theName}
            />
          </div>

          {/* Surname Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">{currentLanguage.formData.surName}</label>
            <input
              type="text"
              className="w-full h-10 border-gray-400 border-[1px] rounded-lg mt-1 px-2"
              placeholder={currentLanguage.formData.placeholders.surName}
            />
          </div>

          {/* Email Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">{currentLanguage.formData.email}</label>
            <input
              type="email"
              className="w-full h-10 border-gray-400 border-[1px] rounded-lg mt-1 px-2"
              placeholder={currentLanguage.formData.placeholders.email}
            />
          </div>

          {/* Message Field */}
          <div className="w-full">
            <label className="text-sm sm:text-base">{currentLanguage.formData.message}</label>
            <textarea
              className="w-full h-20 max-h-32 border-gray-400 border-[1px] rounded-lg mt-1 px-2"
              placeholder={currentLanguage.formData.placeholders.message}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-10 rounded-lg mt-1 bg-primary text-white hover:bg-primary-dark transition"
          >
            {currentLanguage.formData.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;