interface ErrorMessageProps {
  error: string | undefined;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <p role="alert" className="text-red-400">
      {error}
    </p>
  );
};

export default ErrorMessage;
