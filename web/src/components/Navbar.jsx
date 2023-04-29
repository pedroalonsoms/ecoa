import Styles from "./Navbar.module.css";
import Links from "./Links";

import LoginPage from "../pages/LoginPage";

const Navbar = (props) => {
  const showLinks = props.showLinks;

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <div className={Styles.navbar}>
      <h1>
        <span className={Styles.e}>E</span>
        <span className={Styles.c}>C</span>
        <span className={Styles.o}>O</span>
        <span className={Styles.a}>A</span>
      </h1>
      <div className={Styles.buttons}>
        {showLinks && <Links />}
        {!props.isLogin && (
          <button className={Styles.logout} onClick={logout}>
            Cerrar sesión
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
