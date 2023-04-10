import Navbar from "../components/Navbar";
import LoginForm from "./LoginForm";
import Styles from './LoginPage.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
    const activeLinks = false;

    const user = {
        email: "a00123456@tec.mx",
        password: "0000",
        role: "student"
    }

    return(
        <div >
            <Navbar showLinks={activeLinks} />
            <div className={Styles.login}>
                <div className={Styles.heading}>
                    <FontAwesomeIcon icon={faUser} size="xl" />
                    <h2>Ingresa a tu cuenta</h2>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;