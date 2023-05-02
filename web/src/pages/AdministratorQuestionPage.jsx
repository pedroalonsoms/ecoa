import Styles from "./AdministratorQuestionPage.module.css";

import Navbar from "../components/Navbar";
import Question from "../components/Question";
import AddQuestionPage from "./AddQuestionPage";
import UpdateQuestionPage from "./UpdateQuestionPage";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdministratorQuestions = () => {
  const activeLinks = true;

  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showUpdateQuestion, setShowUpdateQuestion] = useState({
    state: false,
    updateId: null,
    acronym: "",
    keyAcronym: "",
    title: "",
    section: "",
    answerKind: "",
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/questions");
        console.log(res);
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, [questions]);

  const handleClick = () => {
    setShowAddQuestion(!showAddQuestion);
    document.body.classList.add("stopScroll");
  };

  const handleEdit = (id) => {
    console.log(id);
    // console.log(data.UpdateId);
    console.log(showUpdateQuestion);
    setShowUpdateQuestion({
      state: !showUpdateQuestion.state,
      updateId: id,
    });
    console.log(showUpdateQuestion);
    document.body.classList.add("stopScroll");
  };

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Preguntas</h2>

      {showAddQuestion && <AddQuestionPage hideAddQuestion={handleClick} />}

      {showUpdateQuestion.state && (
        <UpdateQuestionPage
          hideUpdateQuestion={handleEdit}
          id={showUpdateQuestion.updateId}
          question={questions.find(
            (answer) => answer.id === showUpdateQuestion.updateId
          )}
        />
      )}

      <div className={Styles.container}>
        <h3>Profesor</h3>
        <div className={Styles.questions}>
          {questions.map(
            (question) =>
              question.section === "TEACHER" && (
                <Question
                  key={question.id}
                  title={question.title}
                  data={question}
                  handleEdit={handleEdit}
                />
              )
          )}
        </div>
        <h3>Materia</h3>
        <div className={Styles.questions}>
          {questions.map(
            (question) =>
              question.section === "COURSE" && (
                <Question
                  key={question.id}
                  title={question.title}
                  data={question}
                  handleEdit={handleEdit}
                />
              )
          )}
        </div>
        <h3>Bloque</h3>
        <div className={Styles.questions}>
          {questions.map(
            (question) =>
              question.section === "BLOCK" && (
                <Question
                  key={question.id}
                  title={question.title}
                  data={question}
                  handleEdit={handleEdit}
                />
              )
          )}
        </div>
      </div>

      <button className={Styles.addButton} onClick={handleClick}>
        <FontAwesomeIcon icon={faPlus} size="2xl" />
      </button>
    </div>
  );
};

export default AdministratorQuestions;
