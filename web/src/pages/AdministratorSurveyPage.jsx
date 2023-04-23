import Styles from './AdministratorSurveyPage.module.css';

import Navbar from "../components/Navbar";
import Survey from "../components/Survey";
import AddSurveyPage from "./AddSurveyPage";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdministratorSurveys = () => {
  const activeLinks = true;

  const [surveys, setSurveys] = useState([]);
  const [showAddSurvey, setShowAddSurvey] = useState(false);

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

  const handleClick = () => {
    setShowAddSurvey(!showAddSurvey);
  };

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Encuestas</h2>

      {showAddSurvey && <AddSurveyPage hideAddQuestion={handleClick} />}

      <div className={Styles.container}>
        <div className={Styles.surveys}>
          {surveys.map((survey) => (
            <Survey key={survey.id} data={survey} />
          ))}
        </div>
      </div>
      {!showAddSurvey &&
        <button className={Styles.addButton} onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus} size="2xl" />
        </button>
      }
    </div>
  );
};

export default AdministratorSurveys;
