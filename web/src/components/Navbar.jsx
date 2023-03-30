import Styles from './Navbar.module.css';
import Links from './Links';

import LoginPage from "../pages/LoginPage"

const Navbar = (props) => {
    const showLinks = props.showLinks;
    return (
        <div className={Styles.navbar}>
            <h1>ECOA</h1>
            {showLinks && <Links />}
        </div>
    );
};

export default Navbar;