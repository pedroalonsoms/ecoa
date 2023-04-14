// import Styles from './AdministratorSurveys.module.css';

import Navbar from "../components/Navbar";

const AdministratorSurveys = () => {
  const activeLinks = true;
  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Encuestas</h2>
    </div>
  );
};

export default AdministratorSurveys;
