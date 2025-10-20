export interface Plan {
  name: string;
  price: number;
  offer?: number;
  description: string[];
  age: number;
}

export interface PlansResponse {
  list: Plan[];
}

export interface TypePlan {
  id: number;
  for: string;
  description: string;
  img: string;
}

export interface PlanListProps {
  planType: number | null;
}

export interface PlanListCardProps {
  plan: Plan;
  positionIndex: number;
  planType: number | null;
}

export interface SelectTypeChildPlanProps {
  planTypeState: number | null;
  typePlan: TypePlan;
  setPlanType: React.Dispatch<React.SetStateAction<number | null>>;
}
