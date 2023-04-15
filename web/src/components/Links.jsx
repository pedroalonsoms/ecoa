import Styles from "./Links.module.css";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul className={Styles.links}>
      <li>
        <Link to="/administrator/surveys" className={Styles.link}>
          Encuestas
        </Link>
      </li>
      <li>
        <Link to="/administrator/questions" className={Styles.link}>
          Preguntas
        </Link>
      </li>
    </ul>
  );
};

export default Links;
