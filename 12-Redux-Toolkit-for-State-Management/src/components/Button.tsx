type ButtonStatus = "send" | "danger" | "warning" | "normal" | "none";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status: ButtonStatus;
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button = ({
  status,
  children,
  className = "",
  isLoading = false,
  ...rest
}: ButtonProps) => {
  const colorStatus: Record<ButtonStatus, string> = {
    send: "bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-400 text-white",
    danger: "bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white",
    warning:
      "bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400 text-white",
    normal: "bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white",
    none: "bg-transparent hover:bg-indigo-600 hover:text-white border-1 text-black",
  };

  return (
    <button
      disabled={isLoading}
      className={`
        ${colorStatus[status]}
        py-1
        px-2
        rounded-lg  
        flex 
        items-center 
        justify-center 
        disabled:cursor-not-allowed
        font-semibold
        ${className}
       `}
      {...rest}
    >
      {isLoading ? (
        <svg
          className="mr-3 -ml-1 size-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          data--h-bstatus="0OBSERVED"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            data--h-bstatus="0OBSERVED"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            data--h-bstatus="0OBSERVED"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};
export default Button;
