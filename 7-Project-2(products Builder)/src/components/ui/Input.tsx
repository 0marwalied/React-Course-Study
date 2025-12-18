import type { InputHTMLAttributes } from "react";

type Iprops = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      {...rest}
      className="border shadow-md focus:border-blue-400 focus:outline-none rounded-sm p-2"
    />
  );
};
export default Input;
