import CookieServices from "@/services/CookieServices";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  redirectPath: string;
  children?: React.ReactNode;
  data?: unknown;
  requireAuth?: boolean;
}

const ProtectedRoute = ({
  requireAuth = true,
  redirectPath,
  children,
  data,
}: ProtectedRouteProps) => {
  const isLogedIn = Boolean(CookieServices.get("jwt"));
  if (requireAuth !== isLogedIn)
    return <Navigate to={redirectPath} state={data} />;
  return children;
};
export default ProtectedRoute;
