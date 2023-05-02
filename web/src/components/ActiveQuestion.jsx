import Styles from "./ActiveQuestion.module.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const ActiveQuestion = (props) => {
  // const [isActive, setIsActive] = useState(props.data.isActive);
  // const [id, setId] = useState(props.data.id);

  // const handleisActive = () => {
  //     setIsActive(!isActive);
  //     // if (isActive === true) {
  //     // 	// TODO. Hacer un state en el padre con una funcion pushArray y llamar en el hijo con los datos
  //     // }
  //     // Send the id to the father component
  //     // props.getIds(props.data.id);
  //     console.log(props.data.id);
  //     props.toggleActive(props.data.id);
  //     // props.getQuestionData(props.data.id);
  //     // props.getIds(props.data.id);
  // };
  const [isActive, setIsActive] = useState(props.data.isActive);
  const [id, setId] = useState(props.data.id);

  const handleisActive = () => {
    setIsActive(!isActive);
    props.toggleActive(props.data.id, !isActive); // Call toggleActive with the question ID and isActive state
    // props.getQuestionData(props.data.id);
  };

  return (
    <div className={Styles.question}>
      <p>{props.title}</p>
      {/* <button
				className={Styles.button}
				onClick={() => handleisActive()}
			>
				{isActive ? (
					<FontAwesomeIcon icon={faToggleOn} size="2xl" className={Styles.button} />
				) : (
					<FontAwesomeIcon icon={faToggleOff} size="2xl" className={Styles.button} />
				)}
			</button> */}
      <label className={Styles.switch} htmlFor={`toggle${id}`}>
        <input
          type="checkbox"
          id={`toggle${id}`}
          name={`toggle${id}`}
          defaultChecked={isActive}
          onClick={() => handleisActive()}
        />
        <span className={Styles.slider}></span>
      </label>
    </div>
  );
};

export default ActiveQuestion;
