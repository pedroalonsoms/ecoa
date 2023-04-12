import Styles from "./AddQuestionPage.module.css";

import { useState } from "react";
import axios from "axios";

const AddQuestionPage = (props) => {
    const [questionData, setQuestionData] = useState({
        title: "",
        section: "",
        answerKind: "",
    });

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
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={Styles.questionPage}>
            <h2>Crear Pregunta</h2>
            <form>
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
                <button type="submit" onClick={cancelButton}>
                    Cancelar
                </button>
                <button type="submit" onClick={saveButton}>
                    Guardar
                </button>
                {/* {error && <p className={Styles.error}>{error}</p>} */}
            </form>
        </div>
    );
};

export default AddQuestionPage;
