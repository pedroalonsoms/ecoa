// import Styles from './CollaboratorSurveys.module.css';

import Navbar from '../components/Navbar';

const CollaboratorSurveys = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Encuestas</h2>
        </div>
    );
};

export default CollaboratorSurveys;