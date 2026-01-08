import { type HtmlHTMLAttributes, type ReactNode } from "react";

interface Iprops extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: string;
  width?: "full" | "fit";
  className?: string;
  type?: "button" | "submit" | "reset";
  textColor?: string;
}

const Button = ({
  children,
  className,
  color,
  width = "full",
  textColor,
  ...rest
}: Iprops) => {
  return (
    <button
      {...rest}
      style={{ backgroundColor: color, color: textColor }}
      className={`${className} w-${width} p-2 rounded-md text-white text-xl font-medium cursor-pointer hover:opacity-80`}
    >
      {children}
    </button>
  );
};
export default Button;
