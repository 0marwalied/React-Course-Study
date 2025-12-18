import { type HtmlHTMLAttributes, type ReactNode } from "react";

interface Iprops extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  width?: "full" | "fit";
}

const Button = ({ children, color, width = "full", ...rest }: Iprops) => {
  return (
    <button
      className={`w-${width} bg-${color}-600 hover:bg-${color}-500 p-2 rounded-md text-white text-xl cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
