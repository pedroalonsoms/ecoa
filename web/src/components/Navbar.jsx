import Styles from './Navbar.module.css';
import Links from './Links';

import LoginPage from "../pages/LoginPage"

const Navbar = (props) => {
    const showLinks = props.showLinks;
    return (
        <div className={Styles.navbar}>
            <h1>
                <span className={Styles.e}>E</span>
                <span className={Styles.c}>C</span>
                <span className={Styles.o}>O</span>
                <span className={Styles.a}>A</span>
            </h1>
            {showLinks && <Links />}
        </div>
    );
};

export default Navbar;