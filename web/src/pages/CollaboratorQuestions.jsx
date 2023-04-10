// import Styles from './CollaboratorQuestions.module.css';

import Navbar from '../components/Navbar';

const CollaboratorQuestions = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Preguntas</h2>
        </div>
    );
};

export default CollaboratorQuestions;