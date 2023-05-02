import Styles from "./TeacherPage.module.css";

import Navbar from "../components/Navbar";
// import TeacherInfo from './TeacherInfo';
// import TeacherQuestions from './TeacherQuestions';
// import TeacherComments from './TeacherComments';

import { useLocation } from "react-router-dom";

const TeacherPage = () => {
  const activeLinks = false;
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Bienvenido a la ECOA {location.state.dataSubmit.fullName}</h2>
      {/* <TeacherInfo />
            <TeacherQuestions />
            <TeacherComments /> */}
    </div>
  );
};

export default TeacherPage;
