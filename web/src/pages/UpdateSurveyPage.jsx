import Styles from "./UpdateSurveyPage.module.css";
import { useState, useEffect } from "react";
import ActiveQuestion from "../components/ActiveQuestion";
import axios from "axios";

const UpdateSurveyPage = (props) => {
  const [error, setError] = useState();
  const [survey, setSurvey] = useState();
  const [questionIds, setQuestionIds] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/surveys/${props.id}`
      );

      setSurvey(res.data);
      setQuestionIds(() =>
        res.data.questions
          .filter((question) => question.isActive)
          .map((question) => question.id)
      );
    };

    fetchSurveys();
  }, []);

  const toggleActive = (questionId) => {
    const newQuestions = survey.questions.map((question) => {
      if (question.id == questionId) {
        return {
          ...question,
          isActive: !question.isActive,
        };
      }

      return question;
    });

    const newSurvey = { ...survey, questions: newQuestions };
    setSurvey(newSurvey);

    const newQuestionIds = [...questionIds];
    const toggledQuestion = newSurvey.questions.find(
      (question) => question.id === questionId
    );

    if (toggledQuestion.isActive) {
      newQuestionIds.push(questionId);
    } else {
      const i = newQuestionIds.indexOf(questionId);
      newQuestionIds.splice(i, 1);
    }

    setQuestionIds(newQuestionIds);
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
    } else if (err == "Cannot update survey that overlaps") {
      return (
        <p className={Styles.error}>La encuesta se empalma con otra encuesta</p>
      );
    } else if (err == "startDate cannot be greater than endDate") {
      return (
        <p className={Styles.error}>
          La fecha de inicio no puede ser mayor a la fecha de finalización
        </p>
      );
    } else if (err == "Cannot update survey with duplicate title") {
      return (
        <p className={Styles.error}>Ya existe una encuesta con ese título</p>
      );
    } else {
      return <p className={Styles.error}>{error}</p>;
    }
  };

  const saveButton = async (e) => {
    e.preventDefault();
    try {
      const surveyData = {
        title: survey.title,
        questionIds: questionIds,
        startDate: survey.startDate,
        endDate: survey.endDate,
      };
      const res = await axios.put(
        `http://localhost:8080/api/surveys/${props.id}`,
        surveyData
      );
      console.log(res);
      props.hideUpdateSurvey();
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  return (
    <div className={Styles.overlay}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h2>Editar Encuesta</h2>
          <form className={Styles.form}>
            <div className={Styles.title}>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                value={survey ? survey.title : ""}
                onChange={(e) => {
                  setSurvey({ ...survey, title: e.target.value });
                }}
                placeholder="Ingresa el título de la encuesta..."
              />
            </div>
            <div className={Styles.dates}>
              <div className={Styles.date}>
                <label htmlFor="startDate">Fecha de Inicio</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={survey ? survey.startDate : ""}
                  onChange={(e) => {
                    setSurvey({ ...survey, startDate: e.target.value });
                  }}
                />
              </div>
              <div className={Styles.date}>
                <label htmlFor="endDate">Fecha de Finalización</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={survey ? survey.endDate : ""}
                  onChange={(e) => {
                    setSurvey({ ...survey, endDate: e.target.value });
                  }}
                />
              </div>
            </div>
          </form>
          <div className={Styles.questions}>
            <div>
              <h3>Profesores</h3>
              {survey &&
                survey.questions
                  .filter((question) => question.section === "TEACHER")
                  .map((question) => (
                    <ActiveQuestion
                      key={question.id}
                      title={question.title}
                      data={question}
                      className={Styles.question}
                      toggleActive={toggleActive}
                    />
                  ))}
            </div>
            <div className={Styles.questions}>
              <h3>Materias</h3>
              {survey &&
                survey.questions
                  .filter((question) => question.section === "COURSE")
                  .map((question) => (
                    <ActiveQuestion
                      key={question.id}
                      title={question.title}
                      data={question}
                      className={Styles.question}
                      toggleActive={toggleActive}
                    />
                  ))}
            </div>
            <div className={Styles.questions}>
              <h3>Bloques</h3>
              {survey &&
                survey.questions
                  .filter((question) => question.section === "BLOCK")
                  .map((question) => (
                    <ActiveQuestion
                      key={question.id}
                      title={question.title}
                      data={question}
                      className={Styles.question}
                      toggleActive={toggleActive}
                    />
                  ))}
            </div>
          </div>
          {handleError(error)}
          <div className={Styles.buttons}>
            <button
              className={Styles.cancel}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                props.hideUpdateSurvey();
              }}
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

export default UpdateSurveyPage;
