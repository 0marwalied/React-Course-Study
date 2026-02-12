import { Navigate } from "react-router";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children: React.ReactNode;
  data?: unknown;
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath,
  children,
  data,
}: ProtectedRouteProps) => {
  if (!isAllowed) return <Navigate to={redirectPath} state={data} />;
  return children;
};
export default ProtectedRoute;
