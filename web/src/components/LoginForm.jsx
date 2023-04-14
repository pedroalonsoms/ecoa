import Styles from "./LoginForm.module.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      });
      // console.log(res);

      const data = {
        id: res.data.id,
        fullName: res.data.fullName,
        role: res.data.role,
      };

      switch (data.role) {
        case "STUDENT":
          navigate("/student", { state: { data } });
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
  );
};

export default LoginForm;
