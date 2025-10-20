import { memo } from "react";
import { RimacIcon, Phone } from "../assets";

const classes = {
  header: "header",
  wrapper: "header__wrapper",
  logo: "header__logo",
  logoIcon: "header__logo-icon",
  contact: "header__contact",
  contactDesc: "header__contact-description",
  contactPhone: "header__contact-phone",
};

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img
            src={RimacIcon}
            alt="Logo Rimac Seguros"
            className={classes.logoIcon}
          />
        </div>
        <div className={classes.contact}>
          <p className={classes.contactDesc}>¡Compra por este medio!</p>
          <a href="" className={classes.contactPhone}>
            <img src={Phone} width={20} height={20} alt="teléfono" />
            <p>(01) 411 6001</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
