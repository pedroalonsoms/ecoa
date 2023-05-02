import Styles from "./AddSurveyPage.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

import ActiveQuestion from "../components/ActiveQuestion";

const AddSurveyPage = (props) => {
  const [questions, setQuestions] = useState([]);
  const [surveyData, setSurveyData] = useState({
    title: "",
    questionIds: [],
    startDate: "",
    endDate: "",
  });
  const [error, setError] = useState("");

  const toggleActive = (id) => {
    // console.log(id);
    const ids = surveyData.questionIds;
    if (ids.includes(id)) {
      setSurveyData({
        ...surveyData,
        questionIds: surveyData.questionIds.filter(
          (questionId) => questionId !== id
        ),
      });
    } else {
      setSurveyData({
        ...surveyData,
        questionIds: [...surveyData.questionIds, id],
      });
    }
  };

  const handleChange = (e) => {
    setSurveyData({ ...surveyData, [e.target.name]: e.target.value });
  };

  // console.log(questions);
  // console.log(surveyData);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/questions");
        // console.log(res);
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  const cancelButton = (e) => {
    e.preventDefault();
    console.log("cancel add");
    props.hideAddSurvey();
  };

  const saveButton = async (e) => {
    e.preventDefault();
    console.log("save");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/surveys",
        surveyData
      );
      console.log(res);
      props.hideAddSurvey();
      // window.location.reload("/administrator/surveys");
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  const handleError = (err) => {
    if (!err) return;
    console.log(err);
    if (err.includes("must contain at least 1 element")) {
      return (
        <p className={Styles.error}>Selecciona por lo menos una pregunta</p>
      );
    } else if (err == "Could not parse Date string") {
      return <p className={Styles.error}>Recuerda llenar todos los campos</p>;
    } else if (err == "Cannot create survey that overlaps") {
      return (
        <p className={Styles.error}>La encuesta se empalma con otra encuesta</p>
      );
    } else if (err == "startDate cannot be greater than endDate") {
      return (
        <p className={Styles.error}>
          La fecha de inicio no puede ser mayor a la fecha de finalización
        </p>
      );
    } else if (err == "Cannot create survey with duplicate title") {
      return (
        <p className={Styles.error}>Ya existe una encuesta con ese título</p>
      );
    } else {
      return <p className={Styles.error}>{error}</p>;
    }
  };

  return (
    <div className={Styles.overlay}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h2>Crear Encuesta</h2>
          <form className={Styles.form}>
            <div className={Styles.title}>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Ingresa el título de la encuesta..."
                onChange={handleChange}
              />
            </div>
            <div className={Styles.dates}>
              <div className={Styles.date}>
                <label htmlFor="startDate">Fecha de Inicio</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.date}>
                <label htmlFor="endDate">Fecha de Finalización</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div className={Styles.questions}>
            <div>
              <h3>Profesores</h3>
              {questions.map(
                (question) =>
                  question.section === "TEACHER" && (
                    <ActiveQuestion
                      key={question.id}
                      title={question.title}
                      data={question}
                      className={Styles.question}
                      toggleActive={toggleActive}
                    />
                  )
              )}
            </div>
            <div className={Styles.questions}>
              <h3>Materias</h3>
              {questions.map(
                (question) =>
                  question.section === "COURSE" && (
                    <ActiveQuestion
                      key={question.id}
                      title={question.title}
                      data={question}
                      className={Styles.question}
                      toggleActive={toggleActive}
                    />
                  )
              )}
            </div>
            <div className={Styles.questions}>
              <h3>Bloques</h3>
              {questions.map(
                (question) =>
                  question.section === "BLOCK" && (
                    <ActiveQuestion
                      key={question.id}
                      title={question.title}
                      data={question}
                      className={Styles.question}
                      toggleActive={toggleActive}
                    />
                  )
              )}
            </div>
          </div>
          {handleError(error)}
          <div className={Styles.buttons}>
            <button
              className={Styles.cancel}
              type="submit"
              onClick={cancelButton}
            >
              Cancelar
            </button>
            <button className={Styles.save} type="submit" onClick={saveButton}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSurveyPage;
