interface IProps {
  statusCode?: number;
  title?: string;
}
const ErrorHandler = ({ statusCode = 500, title = "Server Error" }: IProps) => {
  return (
    <div>
      <h2>
        {statusCode}, {title}
      </h2>
    </div>
  );
};

export default ErrorHandler;
