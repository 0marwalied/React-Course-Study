interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({
  children,
  className,
  width = "w-full",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${width} ${className} rounded-lg text-white px-3 py-3 duration-200 font-medium bg-[#149eca] cursor-pointer hover:bg-[#0f7cae]`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
