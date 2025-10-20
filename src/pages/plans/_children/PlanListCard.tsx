import { memo } from "react";
import type { PlanListCardProps, User } from "../../../types";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, Clinic as ClinicIcon } from "../../../assets";
import { useDataUser } from "../../../hooks/useDataUser";

const classes = {
  container: "plan-list__card",
  floating: "plan-list__card__floating",
  presentation: "plan-list__card__presentation",
  title: "plan-list__card__presentation__title",
  name: "plan-list__card__presentation__title__name",
  offer: "plan-list__card__presentation__title__offer",
  previousOffer: "plan-list__card__presentation__title__offer--previous",
  list: "plan-list__card__list",
  item: "plan-list__card__list__item",
  button: "plan-list__card__button",
};

const PlanListCard = (props: PlanListCardProps) => {
  const { plan, planType, positionIndex } = props;
  const { setUser, user } = useDataUser();
  const condition = (positionIndex + 1) % 2 === 0;
  const navigate = useNavigate();
  const finalPrice = planType === 2 ? plan?.offer : plan?.price;

  const handleClick = () => {
    const userData: User = {
      dni: user?.dni ?? "",
      birthday: user?.birthday ?? "",
      name: user?.name ?? "",
      lastName: user?.lastName ?? "",
      phone: user?.phone ?? "",
      plan: plan.name ?? "",
      price: finalPrice ?? 0,
    };
    setUser(userData);
    navigate("/resume");
  };
  return (
    <div className={classes.container}>
      {condition && <div className={classes.floating}>Plan recomendado</div>}
      <div className={classes.presentation}>
        <div className={classes.title}>
          <p className={classes.name}>{plan?.name}</p>
          <div className={classes.offer}>
            COSTO DEL PLAN <br />
            {plan?.offer && (
              <p className={classes.previousOffer}>${plan?.price} antes</p>
            )}
            <span>${plan?.offer ?? plan?.price} al mes</span>
          </div>
        </div>
        <img
          src={condition ? ClinicIcon : HomeIcon}
          alt="Icon"
          width={56}
          height={56}
        />
      </div>
      <ul className={classes.list}>
        {plan?.description.map((feature, featureIndex) => (
          <li key={featureIndex} className={classes.item}>
            {feature}
          </li>
        ))}
      </ul>
      <button type="button" className={classes.button} onClick={handleClick}>
        Seleccionar Plan
      </button>
    </div>
  );
};

export default memo(PlanListCard);
