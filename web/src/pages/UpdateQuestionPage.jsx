import Styles from "./UpdateQuestionPage.module.css";

import axios from "axios";
import { useState } from "react";

const UpdateQuestionPage = (props) => {
  const [questionData, setQuestionData] = useState({
    acronym: "",
    keyAcronym: "",
    title: props.question.title,
    section: props.question.section,
    answerKind: props.question.answerKind,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  const cancelButton = (e) => {
    e.preventDefault();
    console.log("cancel update");
    props.hideUpdateQuestion();
    document.body.classList.remove("stopScroll");
  };

  const saveButton = async (e) => {
    e.preventDefault();
    console.log("save update");
    console.log(props.id);
    try {
      const res = await axios.put(
        `http://localhost:8080/api/questions/${props.id}`,
        questionData
      );
      console.log(res);
      props.hideUpdateQuestion();
      document.body.classList.remove("stopScroll");
      // window.location.reload();
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  console.log(questionData);
  console.log(props.id);
  console.log(props.question);
  return (
    <div className={Styles.overlay}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h2>Editar Pregunta: {props.question.title}</h2>
          <form className={Styles.form}>
            <label htmlFor="section">Sección</label>
            <select
              id="section"
              name="section"
              onChange={handleChange}
              defaultValue={
                (questionData.section = "" ? "DEFAULT" : questionData.section)
              }
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
              defaultValue={
                (questionData.answerKind = ""
                  ? "DEFAULT"
                  : questionData.answerKind)
              }
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
              defaultValue={questionData.title}
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
              <p className={Styles.error}>
                Recuerda llenar todos los campos
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuestionPage;
