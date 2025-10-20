import { useNavigate } from "react-router-dom";
import { HeadbandProgress } from "../../components";
import SelectPlanType from "./_children/SelectPlanType";
import { useDataUser } from "../../hooks/useDataUser";
import { ROUTES } from "../../constants";
import { ArrowBack } from "../../assets";

const classes = {
  plans: "plans",
  return: "plans__return",
  text: "plans__text",
  title: "plans__text__title",
  comment: "plans__text__comment",
};

const Plans = () => {
  const { user, setUser } = useDataUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate(ROUTES.HOME);
  };

  return (
    <section className={classes.plans}>
      <HeadbandProgress status={1} />
      <div className="content-wrapper">
        <button onClick={handleLogout} className={classes.return}>
          <img src={ArrowBack} alt="Volver" width={24} height={24} /> Volver
        </button>
        <div className={classes.text}>
          <h3
            className={classes.title}
          >{`${user?.name} ¿Para quién deseas cotizar?`}</h3>
          <p className={classes.comment}>
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <SelectPlanType />
      </div>
    </section>
  );
};

export default Plans;
