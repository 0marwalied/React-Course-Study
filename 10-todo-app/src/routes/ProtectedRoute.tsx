import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  isAuth?: boolean;
  path?: string;
}

const ProtectedRoute = ({ children, isAuth, path }: ProtectedRouteProps) => {
  return isAuth ? children : <Navigate to={`/${path}`} />;
};

export default ProtectedRoute;
