import Styles from './ProfessorPage.module.css';

import Navbar from "../components/Navbar";
// import ProfessorInfo from './ProfessorInfo';
// import ProfessorQuestions from './ProfessorQuestions';
// import ProfessorComments from './ProfessorComments';

import { useLocation } from "react-router-dom";

const ProfessorPage = () => {
    const activeLinks = false;
    const location = useLocation();

    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Bienvenido a la ECOA {location.state.data.fullName}</h2>
            {/* <ProfessorInfo />
            <ProfessorQuestions />
            <ProfessorComments /> */}
        </div>
    )
}

export default ProfessorPage;