import Styles from "./Survey.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPenToSquare,
    faToggleOn,
    faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useState } from "react";

const Survey = (props) => {
    // const [toggle, setToggle] = useState(false);

    // const handleToggle = () => {
    //     setToggle(!toggle);
    // };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                `http://localhost:8080/api/surveys/${id}`
            );
            console.log(res);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={Styles.survey}>
            <p>{props.title}</p>
            <div className={Styles.container}>
                <p>Active</p>
                <p>15 Abr - 18 Abr</p>
                <div className={Styles.buttons}>
                    <button className={Styles.button}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className={Styles.button}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    {/* <button
                        className={Styles.button}
                        onClick={() => handleToggle()}
                    >
                        {toggle ? (
                            <FontAwesomeIcon icon={faToggleOn} />
                        ) : (
                            <FontAwesomeIcon icon={faToggleOff} />
                        )}
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Survey;
