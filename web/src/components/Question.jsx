import Styles from "./Question.module.css";

import UpdateQuestionPage from "../pages/UpdateQuestionPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Question = (props) => {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/questions/${id}`
      );
      console.log(res);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // const handleEdit = (id) => {
  //     console.log(id);
  //     return <UpdateQuestionPage id={id} />;
  // };

  return (
    <div className={Styles.question}>
      <p>{props.title}</p>
      {/* <FontAwesomeIcon icon={faTrash} size="lg" /> */}
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
  );
};

export default Question;
