import Styles from './Links.module.css';
import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <ul className={Styles.links}>
            <li>
                <Link to="/collaborator/surveys" className={Styles.link}>Encuestas</Link>
            </li>
            <li>
                <Link to="/collaborator/questions" className={Styles.link}>Preguntas</Link>
            </li>
        </ul>
    );
};

export default Links;