// import Styles from './CollaboratorQuestions.module.css';

import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';


const CollaboratorQuestions = () => {
    const activeLinks = true;

    const [questions, setQuestions] = useState([]);

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
    }, []);

    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Preguntas</h2>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>{question.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CollaboratorQuestions;