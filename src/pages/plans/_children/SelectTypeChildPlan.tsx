import { memo } from "react";
import type { SelectTypeChildPlanProps } from "../../../types";
import { Check } from "../../../assets";

const classes = {
  button: "type-plan__button",
  buttonActive: "type-plan__button--active",
  checkContainer: "type-plan__check-container",
  check: "type-plan__check-container__check",
  checkActive: "type-plan__check-container__check--active",
  titleContainer: "type-plan__button__title-container",
  img: "type-plan__button__title-container__img",
  title: "type-plan__button__title-container__title",
  description: "type-plan__button__description",
};

const SelectTypeChildPlan = (props: SelectTypeChildPlanProps) => {
  const { typePlan, setPlanType, planTypeState } = props;

  const handleClick = (plan: number) => {
    setPlanType(plan);
  };

  const conditionActive = planTypeState === typePlan.id;
  return (
    <button
      type="button"
      key={typePlan.id}
      className={`${classes.button} ${conditionActive && classes.buttonActive}`}
      onClick={() => handleClick(typePlan.id)}
    >
      <div className={classes.checkContainer}>
        <div
          className={`${classes.check} ${
            conditionActive && classes.checkActive
          }`}
        >
          <img src={Check} alt="Icon check" width={17} height={17} />
        </div>
      </div>
      <div className={classes.titleContainer}>
        <img
          src={typePlan.img}
          alt={typePlan.for}
          width={48}
          height={48}
          className={classes.img}
        />
        <div className={classes.title}>{typePlan.for}</div>
      </div>
      <p className={classes.description}>{typePlan.description}</p>
    </button>
  );
};

export default memo(SelectTypeChildPlan);
