import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  isAuth?: boolean;
  path?: string;
  data?: unknown;
}

const ProtectedRoute = ({
  children,
  isAuth,
  path,
  data,
}: ProtectedRouteProps) => {
  return isAuth ? (
    children
  ) : (
    <Navigate replace state={{ data }} to={`/${path}`} />
  );
};

export default ProtectedRoute;
