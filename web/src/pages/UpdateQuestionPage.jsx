import Styles from './UpdateQuestionPage.module.css';

import axios from 'axios';
import { useState } from 'react';

const UpdateQuestionPage = (props) => {
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

    const cancelButton = (e) => {
        e.preventDefault();
        console.log("cancel update");
        props.hideUpdateQuestion();
        document.body.classList.remove('stopScroll');
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
            window.location.reload();
        } catch (err) {
            console.log(err);
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
                        defaultValue={props.question.title}
                    />
                    <div className={Styles.buttons}>
                        <button className={Styles.cancel} type="submit" onClick={cancelButton}>
                            Cancelar
                        </button>
                        <button className={Styles.save} type="submit" onClick={saveButton}>
                            Guardar
                        </button>
                    </div>
                    {/* {error && <p className={Styles.error}>{error}</p>} */}
                </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateQuestionPage;