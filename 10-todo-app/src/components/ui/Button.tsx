type ButtonStatus = "send" | "danger" | "warning" | "normal" | "none";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status: ButtonStatus;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  text,
  status,
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  const colorStatus: Record<ButtonStatus, string> = {
    send: "bg-indigo-500 hover:bg-indigo-600",
    danger: "bg-red-500 hover:bg-red-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    normal: "bg-gray-500 hover:bg-gray-600",
    none: "",
  };

  return (
    <button
      className={`${colorStatus[status]} p-2 rounded-lg text-white ${className}`}
      {...rest}
    >
      {children || text}
    </button>
  );
};
export default Button;
