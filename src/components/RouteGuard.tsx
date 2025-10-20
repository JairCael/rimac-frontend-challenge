import { Navigate } from "react-router-dom";
import { useDataUser } from "../hooks/useDataUser";
import { ROUTES } from "../constants";
import type { RouteGuardProps } from "../types";

const RouteGuard = ({ children, type }: RouteGuardProps) => {
  const { user } = useDataUser();
  const isAuthenticated = !!user;

  if (type === "public" && isAuthenticated) {
    return <Navigate to={ROUTES.PLANS} replace />;
  }

  if (type === "protected" && !isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};

export default RouteGuard;
