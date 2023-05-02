import Styles from "./Survey.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useState } from "react";

const Survey = (props) => {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/surveys/${id}`);
      console.log(res);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={Styles.survey}>
      <p>{props.data.title}</p>
      <div className={Styles.container}>
        {props.data.isActive ? <p>Activa</p> : <p>Inactiva</p>}
        <p>
          {props.data.startDate} - {props.data.endDate}
        </p>
        <div className={Styles.buttons}>
          <button
            className={Styles.button}
            onClick={() => handleDelete(props.data.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className={Styles.button}
            onClick={(e) => props.handleEdit(props.data.id)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
