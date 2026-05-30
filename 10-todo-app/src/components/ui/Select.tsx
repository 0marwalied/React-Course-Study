interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
}

const Select = ({ children, ...rest }: SelectProps) => {
  return (
    <select
      name="category"
      id="category"
      className="border-2 text-black rounded-md p-1 font-semibold"
      {...rest}
    >
      {children}
    </select>
  );
};
export default Select;
