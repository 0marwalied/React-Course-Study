import { Link, useLocation } from "react-router-dom";
import Button from "../../components/ui/Button";

type TProps = {
  status?: string;
  message?: string;
};

const ErrorPage = ({ status = "404", message = "Page not found" }: TProps) => {
  const { pathname } = useLocation();

  return (
    <div className="fixed inset-0 flex flex-col space-y-5 items-center justify-center">
      <h1 className="text-5xl text-black font-bold text-center mt-10">
        {status}
      </h1>
      <h2 className="text-8xl text-black text-center mt-5 font-bold">
        {message}
      </h2>
      <h3 className="text-xl text-center mt-5 text-gray-500 font-bold">
        Oops something went wrong. Try to refresh this page or feel free to
        contuct us if the problem persists.
      </h3>
      <div className="flex justify-center space-x-2">
        <Button status="send" style={{ fontWeight: "bold" }}>
          <Link to="/">Go back Home</Link>
        </Button>
        <Button status="normal" style={{ fontWeight: "bold" }}>
          <Link to={pathname} reloadDocument>
            Refresh
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
