import { ButtonHTMLAttributes, JSX, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "red" | "danger";

const btnType: Record<Variant, string> = {
  primary:
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
  secondary:
    "bg-secondary-200  text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: Variant;
  className?: string;
}

function ButtonIcon({ children, onClick, className, variant, ...rest }:ButtonIconProps):JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`
        ${btnType[variant]}
        ${className} flex items-center justify-center gap-x-1 rounded-md p-1
        [&>svg]:w-5  [&>svg]:h-5 [&>svg]:text-inherit
        text-xs lg:text-sm
        transition-all duration-300 ease-out"`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
