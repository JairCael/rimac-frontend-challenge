import type { ReactNode } from "react";

export interface RouteGuardProps {
  children: ReactNode;
  type: "public" | "protected";
}

export interface HeadbandProgressProps {
  status: number;
}
