import { API_ENDPOINTS } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import PlanListCard from "./PlanListCard";
import type { PlanListProps, PlansResponse } from "../../../types";
import { useDataUser } from "../../../hooks/useDataUser";
import { ageUser } from "../../../utilities/calculateAgeUser";

const PlanList = ({ planType }: PlanListProps) => {
  const { data, loading } = useFetch<PlansResponse>(API_ENDPOINTS.PLANS);
  const { user } = useDataUser();
  const age = ageUser(user?.birthday || "16-02-1996");

  const processedPlans =
    planType === 2
      ? data?.list?.map((plan) => ({
          ...plan,
          offer: plan.price * 0.95,
        }))
      : data?.list;

  return (
    <div className="plan-list">
      {loading ? (
        <div className="spinner-loading spinner-loading--plans" />
      ) : (
        processedPlans
          ?.filter((plan) => plan.age >= age)
          ?.map((plan, index) => (
            <PlanListCard
              plan={plan}
              planType={planType}
              key={index}
              positionIndex={index}
            />
          ))
      )}
    </div>
  );
};

export default PlanList;
