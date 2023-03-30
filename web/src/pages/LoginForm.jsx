import Styles from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <form className={Styles.form}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Ingresar</button>
        </form>
    );
};

export default LoginForm;