import Styles from './ProfessorPage.module.css';

import Navbar from "../components/Navbar";
// import ProfessorInfo from './ProfessorInfo';
// import ProfessorQuestions from './ProfessorQuestions';
// import ProfessorComments from './ProfessorComments';

const ProfessorPage = () => {
    const activeLinks = false;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Bienvenido profesor</h2>
            {/* <ProfessorInfo />
            <ProfessorQuestions />
            <ProfessorComments /> */}
        </div>
    )
}

export default ProfessorPage;