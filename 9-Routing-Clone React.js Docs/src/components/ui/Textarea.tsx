type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const Textarea = ({ ...rest }: TextareaProps) => {
  return (
    <div>
      <textarea
        className="border border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 block w-lg p-3 rounded-lg duration-200"
        rows={6}
        {...rest}
      ></textarea>
    </div>
  );
};
export default Textarea;
