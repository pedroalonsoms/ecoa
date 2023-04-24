import Styles from './AdministratorSurveyPage.module.css';

import Navbar from "../components/Navbar";
import Survey from "../components/Survey";
import AddSurveyPage from "./AddSurveyPage";
import UpdateSurveyPage from "./UpdateSurveyPage";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdministratorSurveys = () => {
  const activeLinks = true;

  const [surveys, setSurveys] = useState([]);
  const [showAddSurvey, setShowAddSurvey] = useState(false);
  const [showUpdateSurvey, setShowUpdateSurvey] = useState({
    state: false,
    updateId: null,
    data: {
      id: null,
      title: null,
      startDate: null,
      endDate: null,
      questionIds: [],
    },
  });

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

  const handleEdit = (id) => {
    console.log(id);
    // console.log(data.UpdateId);
    console.log(showUpdateSurvey);
    setShowUpdateSurvey({
      ...showUpdateSurvey,
      state: !showUpdateSurvey.state,
      updateId: id,
    });
    
    console.log("showUpdateSurvey");
    console.log(showUpdateSurvey);
  };

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Encuestas</h2>

      {showAddSurvey && <AddSurveyPage hideAddQuestion={handleClick} />}

      {showUpdateSurvey.state && (
        <UpdateSurveyPage
          hideUpdateSurvey={handleEdit}
          id={showUpdateSurvey.updateId}
          data={showUpdateSurvey.data}
          survey={surveys.find(
            (survey) => survey.id === showUpdateSurvey.updateId
          )}
        />
      )}

      <div className={Styles.container}>
        <div className={Styles.surveys}>
          {surveys.map((survey) => (
            <Survey key={survey.id} data={survey} handleEdit={handleEdit} />
          ))}
        </div>
      </div>

      {(!showAddSurvey && !showUpdateSurvey.state) &&
        <button className={Styles.addButton} onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus} size="2xl" />
        </button>
      }
    </div>
  );
};

export default AdministratorSurveys;
