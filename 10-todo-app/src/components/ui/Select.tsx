interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  firstOption?: string;
  children?: React.ReactNode;
}

const Select = ({ firstOption, children, ...rest }: SelectProps) => {
  return (
    <select
      name="category"
      id="category"
      className="border-2 text-white rounded-md p-1"
      {...rest}
    >
      {firstOption && (
        <option value="" selected hidden>
          {firstOption}
        </option>
      )}
      {children}
    </select>
  );
};
export default Select;
