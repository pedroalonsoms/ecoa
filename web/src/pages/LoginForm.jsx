import Styles from "./LoginForm.module.css";

import { useState } from "react";
import Axios from "axios";	

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
        Axios.post("http://localhost:8080/api/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <form action="POST" onSubmit={handleSubmit} className={Styles.form}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="a00123456@tec.mx"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button type="submit" onClick={handleSubmit}>Ingresar</button>
        </form>
    );
};

export default LoginForm;
