import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Styles from './LoginPage.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link , useLocation} from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Login = (props) => {
  const activeLinks = false;
  const isLogin = true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      });
      // console.log(res);

      const data = {
        fullName: res.data.fullName,
        role: res.data.role,
        registration: res.data.registration
      };

      // Save session in localstorage
      localStorage.setItem("auth", JSON.stringify({...data, isLogged: true}));

      setAuth({...data, isLogged: true});

      switch (data.role) {
        case "STUDENT":
          navigate(`/game?studentRegistration=${data.registration}`, { state: { data } });
          break;
        case "TEACHER":
          navigate("/teacher", { state: { data } });
          break;
        case "ADMINISTRATOR":
          navigate("/administrator/surveys", { state: { data } });
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <div >
      <Navbar showLinks={activeLinks} isLogin={isLogin} />
      <div className={Styles.login}>
        <div className={Styles.heading}>
          <FontAwesomeIcon icon={faUser} size="xl" />
          <h2>Ingresa a tu cuenta</h2>
        </div>
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
          <button type="submit" onClick={handleSubmit}>
            Ingresar
          </button>
          {error && <p className={Styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;