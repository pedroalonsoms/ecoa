import Styles from './UpdateQuestionPage.module.css';

import axios from 'axios';
import { useState } from 'react';

const UpdateQuestionPage = (props) => {
    const [question, setQuestion] = useState({
        title: "",
        section: "",
        answerKind: "",
    });

    const handelChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value,
        });
    };

    const cancelButton = (e) => {
        e.preventDefault();
        console.log("cancel update");
        props.hideUpdateQuestion();
    };

    const saveButton = async (e) => {
        e.preventDefault();
        console.log("save update");
        console.log(props.id);
        try {
            const res = await axios.put(
                `http://localhost:8080/api/questions/${props.id}`,
                question
            );
            console.log(res);
            props.hideUpdateQuestion();
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    console.log(question);
    console.log(props.id);
    console.log(props.question);
    return (
        <div className={Styles.questionPage}>
            <h2>Editar Pregunta con el id: {props.id}</h2>
            <form>
            <label htmlFor="section">Sección</label>
                <select
                    id="section"
                    name="section"
                    onChange={handelChange}
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
                    onChange={handelChange}
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
                    onChange={handelChange}
                    defaultValue={props.question.title}
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

export default UpdateQuestionPage;