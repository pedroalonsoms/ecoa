import Navbar from "../components/Navbar";
import LoginForm from "./LoginForm";
import styles from './LoginPage.module.css';

const Login = (props) => {
    const activeLinks = false;
    return(
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Ingresa a tu cuenta</h2>
            <LoginForm />
        </div>
    );
}

export default Login;