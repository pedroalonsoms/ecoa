import Styles from "./CollaboratorQuestionPage.module.css";

import Navbar from "../components/Navbar";
import Question from "../components/Question";
import AddQuestionPage from "./AddQuestionPage";
import UpdateQuestionPage from "./UpdateQuestionPage";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CollaboratorQuestions = () => {
    const activeLinks = true;

    const [questions, setQuestions] = useState([]);
    const [showAddQuestion, setShowAddQuestion] = useState(false);
    const [showUpdateQuestion, setShowUpdateQuestion] = useState({
        state: false,
        updateId: null,
        title: "",
        section: "",
        answerKind: "",
    });

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8080/api/questions"
                );
                console.log(res);
                setQuestions(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchQuestions();
    }, []);

    const handleClick = () => {
        setShowAddQuestion(!showAddQuestion);
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
    };

    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Preguntas</h2>

            {showAddQuestion && (
                <AddQuestionPage hideAddQuestion={handleClick} />
            )}

            {showUpdateQuestion.state && (
                <UpdateQuestionPage
                    hideUpdateQuestion={handleEdit}
                    id={showUpdateQuestion.updateId}
                    question={questions.find( answer => answer.id === showUpdateQuestion.updateId)}
                />
            )}

            <h3>Profesor</h3>
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
            <h3>Materia</h3>
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
            <button className={Styles.addButton} onClick={handleClick}>
                <FontAwesomeIcon icon={faPlus} size="2xl" />
            </button>
        </div>
    );
};

export default CollaboratorQuestions;
