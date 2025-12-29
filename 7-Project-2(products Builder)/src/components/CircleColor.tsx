import type { LiHTMLAttributes } from "react";

interface Iprops extends LiHTMLAttributes<HTMLLIElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: Iprops) => {
  return (
    <li
      className="rounded-4xl w-5 h-5 cursor-pointer"
      style={{ backgroundColor: color }}
      {...rest}
    ></li>
  );
};
export default CircleColor;
