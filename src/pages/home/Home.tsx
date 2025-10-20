import { Form, Footer } from "../../components";

const classes = {
  container: "home",
  blurPurple: "home__blur-purple",
  blurCyan: "home__blur-cyan",
  imageContainer: "home__image-container",
  imageHome: "home__image-container__image",
  content: "home__content",
  header: "home__header",
  headerMobile: "home__header__mobile",
  headerText: "home__header__mobile-text",
  badge: "home__header__badge",
  title: "home__header__title",
  description: "home__header__description",
};

const Home = () => {
  return (
    <>
      <picture>
        <source srcSet="/images/blur-purple.webp" type="image/webp" />
        <img
          src="/images/blur-purple.png"
          alt="blur purple"
          className="blur-purple"
          width={430}
          height={760}
        />
      </picture>
      <picture>
        <source srcSet="/images/blur-cyan.webp" type="image/webp" />
        <img
          src="/images/blur-cyan.png"
          alt="blur cyan"
          className="blur-cyan"
          width={430}
          height={760}
        />
      </picture>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <picture>
            <source srcSet="/images/home-image.webp" type="image/webp" />
            <img
              src="/images/home-image.png"
              className={classes.imageHome}
              alt="Familia feliz protegida con seguro Rimac"
              width={480}
              height={560}
            />
          </picture>
        </div>
        <div className={classes.content}>
          <header className={classes.header}>
            <div className={classes.headerMobile}>
              <div className={classes.headerText}>
                <h1 className={classes.badge}>Seguro Salud Flexible</h1>
                <h2 className={classes.title}>Creado para ti y tu familia</h2>
              </div>
              <picture>
                <source srcSet="/images/home-image.webp" type="image/webp" />
                <img
                  src="/images/home-image.png"
                  alt=""
                  width={136}
                  height={160}
                  loading="lazy"
                />
              </picture>
            </div>
            <h3 className={classes.description}>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </h3>
          </header>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
