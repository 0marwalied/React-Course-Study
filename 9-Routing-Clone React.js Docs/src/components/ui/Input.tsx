type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className="border border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 block w-full p-3 rounded-lg duration-200"
    ></input>
  );
};
export default Input;
