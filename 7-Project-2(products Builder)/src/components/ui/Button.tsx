import { type HtmlHTMLAttributes, type ReactNode } from "react";

interface Iprops extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: string;
  width?: "full" | "fit";
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  className,
  color,
  width = "full",
  ...rest
}: Iprops) => {
  return (
    <button
      {...rest}
      style={{ backgroundColor: color }}
      className={`${className} w-${width} p-2 rounded-md text-white text-xl cursor-pointer hover:opacity-80`}
    >
      {children}
    </button>
  );
};
export default Button;
