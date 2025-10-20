import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useDataUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de UserProvider");
  }
  return context;
};
