import React from "react";
import { typesOfPlan } from "../utilities/typeOfPlans";
import SelectTypeChildPlan from "./SelectTypeChildPlan";
import PlanList from "./PlanList";
import type { TypePlan } from "../../../types";

const SelectPlanType = () => {
  const [planType, setPlanType] = React.useState<number | null>(null);

  return (
    <>
      <div className="type-plan">
        {typesOfPlan.map((typePlan: TypePlan) => (
          <SelectTypeChildPlan
            key={typePlan.id}
            typePlan={typePlan}
            setPlanType={setPlanType}
            planTypeState={planType}
          />
        ))}
      </div>
      {planType !== null && <PlanList planType={planType} />}
    </>
  );
};

export default SelectPlanType;
