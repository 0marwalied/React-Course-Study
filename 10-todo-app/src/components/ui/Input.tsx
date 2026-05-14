export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      className="
        border-2 border-gray-300
        shadow-md
        text-black
        rounded-lg
        p-2
        font-semibold
        w-full
        outline-none
        focus:border-indigo-500
      "
      {...rest}
    />
  );
};

export default Input;
