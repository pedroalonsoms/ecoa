import Styles from "./AddQuestionPage.module.css";

import { useState } from "react";
import axios from "axios";

const AddQuestionPage = (props) => {
  const [questionData, setQuestionData] = useState({
    acronym: "",
    keyAcronym: "",
    title: "",
    section: "",
    answerKind: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(questionData);

  const cancelButton = (e) => {
    e.preventDefault();
    console.log("cancel add");
    props.hideAddQuestion();
    document.body.classList.remove("stopScroll");
  };

  const saveButton = async (e) => {
    e.preventDefault();
    console.log("save");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/questions",
        questionData
      );
      console.log(res);
      props.hideAddQuestion();
      document.body.classList.remove("stopScroll");
      // window.location.reload();
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  return (
    <div className={Styles.overlay}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h2>Crear Pregunta</h2>
          <form className={Styles.form}>
            <label htmlFor="section">Sección</label>
            <select
              id="section"
              name="section"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" defaultValue disabled>
                -- Escoge una sección para la pregunta --
              </option>
              <option value="TEACHER">Profesor</option>
              <option value="COURSE">Materia</option>
              <option value="BLOCK">Bloque</option>
            </select>
            <label htmlFor="answerKind">Tipo de Pregunta</label>
            <select
              id="answerKind"
              name="answerKind"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                -- Ecoge el tipo de la pregunta --
              </option>
              <option value="TEXT">Abierta</option>
              <option value="NUMERIC">Cerrada</option>
            </select>
            <label htmlFor="title">Pregunta</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Escribe la pregunta aquí"
              onChange={handleChange}
            />
            <div className={Styles.buttons}>
              <button
                className={Styles.cancel}
                type="submit"
                onClick={cancelButton}
              >
                Cancelar
              </button>
              <button
                className={Styles.save}
                type="submit"
                onClick={saveButton}
              >
                Guardar
              </button>
            </div>
            {error && (
              <p className={Styles.error}>Recuerda llenar todos los campos</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionPage;
