import { memo } from "react";
import {
  RimacIconWhite as RimacIconDesktop,
  RimacIconWhiteMobile as RimacIconMobile,
} from "../assets";

const classes = {
  footer: "footer",
  wrapper: "footer__wrapper",
  icon: "footer__icon",
  iconMobile: "footer__icon--mobile",
  iconDesktop: "footer__icon--desktop",
  copyright: "footer__copyright",
};

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.icon}>
          <img
            src={RimacIconMobile}
            alt="Logo Rimac"
            className={classes.iconMobile}
            width={138}
            height={20}
          />
          <img
            src={RimacIconDesktop}
            alt="Logo Rimac"
            className={classes.iconDesktop}
            width={85}
            height={42}
          />
        </div>
        <div className={classes.copyright}>
          <span>© 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
