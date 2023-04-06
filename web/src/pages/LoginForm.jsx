import Styles from "./LoginForm.module.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";	

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/login", {
                email: email,
                password: password,
            });
            console.log(res);
            const role = res.data.role;
            switch (role) {
                case "STUDENT":
                    navigate("/student");
                    break;
                case "TEACHER":
                    navigate("/professor");
                    break;
                case "COLABORATOR":
                    navigate("/collaborator/surveys");
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err);
            setError(err.response.data);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     console.log("Email: ", email);
    //     console.log("Password: ", password);

    //     try {
    //         await axios.get("http://localhost:8080/api/login", {
    //             email: email,
    //             password: password,
    //         }).then((response) => {
    //             console.log(response);
    //             if (response.data.message) {
    //                 setLoginStatus(response.data.message);
    //             } else {
    //                 setLoginStatus(response.data[0].fullName);
    //             }
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     console.log("Login status: ", loginStatus);
    // };

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     console.log("submit");
    //     axios.get("http://localhost:8080", {
    //         email: email,
    //         password: password,
    //     }).then((response) => {
    //         console.log("response");
    //         console.log(response);

    //         // Get the data from the response
    //         const data = response.data;

    //         // If the data has a message, then the login failed
    //         if (data.message) {
    //             setLoginStatus(data.message);
    //         } else {
    //             // Otherwise, the login was successful
    //             setLoginStatus(data[0].fullName);
    //         }

    //         console.log(data);

        
            
    //     });
        // const requestOptions = {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: 'Login POST Request' })
        // };
        // const response = await fetch('http://localhost:8080/login', requestOptions);
        // const data = await response.json();
        // console.log(data);
        // if (data.message) {
        //     setLoginStatus(data.message);
        // } else {
        //     setLoginStatus(data[0].fullName);
        // }
        // this.setState({ postId: data.id });
    // };

    return (
        <form className={Styles.form}>
            <label htmlFor="email">Email</label>
            <input
                required
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
                required
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button type="submit" onClick={handleSubmit}>Ingresar</button>
            {error && <p className={Styles.error}>{error}</p>}
        </form>
    );
};

export default LoginForm;
