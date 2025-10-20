import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDataUser } from "../hooks/useDataUser";
import { ROUTES } from "../constants";
import { DottedLine, ArrowBackMobile } from "../assets";
import type { HeadbandProgressProps } from "../types";

const classes = {
  headband: "headband-progress",
  desktop: "headband-progress__desktop",
  text: "headband-progress__desktop__text",
  dotted: "headband-progress__desktop__dotted",
  mobile: "headband-progress__mobile",
  return: "headband-progress__mobile__return",
  message: "headband-progress__mobile__message",
  progressBar: "headband-progress__mobile__progress-bar",
  progress: "headband-progress__mobile__progress-bar__progress",
};

const HeadbandProgress = (props: HeadbandProgressProps) => {
  const { status = 1 } = props;
  const { setUser } = useDataUser();
  const navigate = useNavigate();
  const message = status === 1 ? "PASO 1 DE 2" : "PASO 2 DE 2";

  const handleBack = () => {
    if (status === 1) {
      setUser(null);
      navigate(ROUTES.HOME);
    } else if (status === 2) {
      navigate(ROUTES.PLANS);
    }
  };

  return (
    <div className={classes.headband}>
      <div className={classes.desktop}>
        <p
          className={`${classes.text} ${
            status === 1 && `${classes.text}--active`
          }`}
        >
          <span>1</span> Planes y coberturas
        </p>
        <div className={classes.dotted}>
          <img src={DottedLine} alt="Línea punteada" width={32} height={24} />
        </div>
        <p
          className={`${classes.text} ${
            status === 2 && `${classes.text}--active`
          }`}
        >
          <span>2</span> Resumen
        </p>
      </div>
      <div className={classes.mobile}>
        <button onClick={handleBack} className={classes.return}>
          <img src={ArrowBackMobile} alt="Volver" width={24} height={24} />
        </button>
        <p className={classes.message}>{message}</p>
        <div className={classes.progressBar}>
          <div className={`${classes.progress} ${status === 2 && "full"}`} />
        </div>
      </div>
    </div>
  );
};

export default memo(HeadbandProgress);
