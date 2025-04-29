import { CustomButtonProps } from "../types";

const CustomButton = ({ label, children, theStyle, textColor, event }: CustomButtonProps) => {
  return (
    <div
      onClick={event}
      className={`${theStyle} rounded-md cursor-pointer flex items-center justify-center py-2`}
    >
      <p className={`${textColor} flex justify-center items-center w-full text-nowrap font-semibold text-sm xl:text-lg `}>
        {label}
      </p>
      <div className={`${children ? " w-9 h-9 absolute mt-2 ml-32 xl:ml-36" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default CustomButton;