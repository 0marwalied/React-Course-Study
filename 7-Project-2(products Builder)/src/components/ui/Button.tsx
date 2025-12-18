import { type HtmlHTMLAttributes, type ReactNode } from "react";

interface Iprops extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: string;
  width?: "full" | "fit";
}

const Button = ({ children, color, width = "full", ...rest }: Iprops) => {
  return (
    <button
      {...rest}
      style={{ backgroundColor: color }}
      className={`w-${width} p-2 rounded-md text-white text-xl cursor-pointer hover:opacity-80`}
    >
      {children}
    </button>
  );
};
export default Button;
