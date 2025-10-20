import { Link } from "react-router-dom";
import { HeadbandProgress } from "../../components";
import { User as UserIcon, ArrowBack } from "../../assets";
import { useDataUser } from "../../hooks/useDataUser";
import { ROUTES } from "../../constants";

const classes = {
  return: "resume__return",
  title: "resume__title",
  resume: "resume__resume",
  name: "resume__resume__name",
  description: "resume__resume__name__description",
  user: "resume__resume__name__user",
  text: "resume__resume__text",
  textTitle: "resume__resume__text__title",
  textDescription: "resume__resume__text__description",
};

const Resume = () => {
  const { user } = useDataUser();
  return (
    <section>
      <HeadbandProgress status={2} />
      <div className="content-wrapper">
        <Link to={ROUTES.PLANS} className={classes.return}>
          <img src={ArrowBack} alt="Volver" width={24} height={24} /> Volver
        </Link>
        <h3 className={classes.title}>Resumen del seguro</h3>
        <div className={classes.resume}>
          <div className={classes.name}>
            <p className={classes.description}>PRECIOS CALCULADOS PARA:</p>
            <div className={classes.user}>
              <img src={UserIcon} alt="User icon" width={24} height={24} />
              <p>{`${user?.name} ${user?.lastName}`}</p>
            </div>
          </div>
          <div className={classes.text}>
            <p className={classes.textTitle}>Responsable de pago</p>
            <p className={classes.textDescription}>{`DNI: ${user?.dni}`}</p>
            <p
              className={classes.textDescription}
            >{`Celular: ${user?.phone}`}</p>
          </div>
          <div className={classes.text}>
            <p className={classes.textTitle}>Plan elegido</p>
            <p className={classes.textDescription}>{user?.plan || ""}</p>
            <p
              className={classes.textDescription}
            >{`Costo del Plan: $${user?.price} al mes`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
