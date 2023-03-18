import styles from './Navbar.module.css';
import Links from './Links';

const Navbar = (props) => {
    const showLinks = props.showLinks;
    return (
        <nav>
            <h1><a href="/">ECOA</a></h1>
            {showLinks && <Links />}
        </nav>
    );
};

export default Navbar;