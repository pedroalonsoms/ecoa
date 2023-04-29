import Styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={Styles.container}>
      <figure>
        <div className={Styles.sadMac}></div>
        <figcaption>
          <span className={Styles.srText}>Error 404: Not Found</span>
          <span className={Styles.e}></span>
          <span className={Styles.r}></span>
          <span className={Styles.r}></span>
          <span className={Styles.o}></span>
          <span className={Styles.r}></span>
          <span className={Styles._4}></span>
          <span className={Styles._0}></span>
          <span className={Styles._4}></span>
          <span className={Styles.n}></span>
          <span className={Styles.o}></span>
          <span className={Styles.t}></span>
          <span className={Styles.f}></span>
          <span className={Styles.o}></span>
          <span className={Styles.u}></span>
          <span className={Styles.n}></span>
          <span className={Styles.d}></span>
        </figcaption>
      </figure>
      <div className={Styles.button}>
        <button
          className={Styles.home}
          onClick={() => (window.location.href = "/")}
        >
          Ir a la página principal
        </button>
      </div>
    </div>
  );
};

export default Error404;
