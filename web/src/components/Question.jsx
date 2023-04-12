import Styles from "./Question.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Question = (props) => {
    return (
        <div className={Styles.question}>
            <p>{props.title}</p>
            {/* <FontAwesomeIcon icon={faTrash} size="lg" /> */}
            <div className={Styles.buttons}>
                <button
                    className={Styles.button}
                    onClick={() => console.log("delete")}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                    className={Styles.button}
                    onClick={() => console.log("edit")}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </div>
        </div>
    );
};

export default Question;
