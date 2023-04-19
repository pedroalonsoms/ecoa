import Styles from './AdministratorSurveyPage.module.css';

import Navbar from "../components/Navbar";
import Survey from "../components/Survey";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdministratorSurveys = () => {
  const activeLinks = true;

  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/surveys");
        console.log(res);
        setSurveys(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSurveys();
  }, []);

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Encuestas</h2>
      <div className={Styles.container}>
        <div className={Styles.surveys}>
          {surveys.map((survey) => (
            <Survey key={survey.id} title={survey.title} />
          ))}
        </div>
      </div>
      <div className={Styles.buttons}>
        <button className={Styles.addButton}>
          <FontAwesomeIcon icon={faPlus} size="2xl" />
        </button>
      </div>
    </div>
  );
};

export default AdministratorSurveys;
