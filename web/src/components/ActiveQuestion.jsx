import Styles from "./ActiveQuestion.module.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const ActiveQuestion = (props) => {
	const [isActive, setIsActive] = useState(false);
	const [id, setId] = useState(props.data.id);

	const handleisActive = () => {
		setIsActive(!isActive);
		// if (isActive === true) {
		// 	// TODO. Hacer un state en el padre con una funcion pushArray y llamar en el hijo con los datos
		// }
		// Send the id to the father component
		props.getIds(props.data.id);
	};

	return (
		<div className={Styles.question}>
			<p>{props.title}</p>
			<button
				className={Styles.button}
				onClick={() => handleisActive()}
			>
				{isActive ? (
					<FontAwesomeIcon icon={faToggleOn} size="2xl" className={Styles.button} />
				) : (
					<FontAwesomeIcon icon={faToggleOff} size="2xl" className={Styles.button} />
				)}
			</button>
		</div>
	);
};

export default ActiveQuestion;
