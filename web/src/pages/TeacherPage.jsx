import Styles from "./TeacherPage.module.css";

import Navbar from "../components/Navbar";
import TeacherInfo from "../components/TeacherInfo";
import TeacherQuestions from "../components/TeacherQuestions";
import TeacherComments from "../components/TeacherComments";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TeacherPage = () => {
  const activeLinks = false;

  const [teacherInfo, setTeacherInfo] = useState([]);
  const location = useLocation();
  console.log(location);

  const teacherRegistration = location.state.dataSubmit.registration;

  // /teachers/:teacherRegistration/info
  // Method: GET - Get teacher info by registration as req
  useEffect(() => {
    const getTeacherInfo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/teachers/${teacherRegistration}/info`
        );
        console.log(res);
        setTeacherInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTeacherInfo();
  }, []);

  console.log("teacherInfo");
  console.log(teacherInfo);

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Bienvenido a la ECOA {location.state.dataSubmit.fullName}</h2>
      {teacherInfo.length == 0 ? (
        <h3 className={Styles.noAnswers}>
          No cuentas con respuestas en este momento
        </h3>
      ) : (
        teacherInfo.map((teacher) => (
          <div className={Styles.wrapper}>
            <div key={teacher.id} className={Styles.container}>
              <h3 className={Styles.courseTitle}>
                {teacher.courseCode} - {teacher.courseTitle}
              </h3>
              <h4 className={Styles.ammountAnswers}>
                Cantidad de respuestas: {teacher.answerAmount}
              </h4>
              <div className={Styles.tableContainer}>
                <table className={Styles.table}>
                  <thead className={Styles.tableHead}>
                    <tr>
                      <td>Pregunta</td>
                      <td>Promedio Resultados</td>
                    </tr>
                  </thead>
                  <tbody className={Styles.tableBody}>
                    <tr>
                      <td>
                        El profesor(a) muestra dominio y experiencia en los
                        temas de la Materia:
                      </td>
                      <td>{teacher["01DOM_Prom"]}</td>
                    </tr>
                    <tr>
                      <td>
                        El profesor(a) me retó para dar lo mejor de mi
                        (desarrollar nuevas habilidades,nuevos conceptos e
                        ideas, pensar de manera diferente, etc.):
                      </td>
                      <td>{teacher["02RET_Prom"]}</td>
                    </tr>
                    <tr>
                      <td>
                        En general, mi experiencia de aprendizaje con el
                        profesor(a) fue:
                      </td>
                      <td>{teacher["03REC_Prom"]}</td>
                    </tr>
                    <tr>
                      <td>
                        El profesor(a) promovió un ambiente de confianza y
                        respeto:
                      </td>
                      <td>{teacher["05ASE_Prom"]}</td>
                    </tr>
                    <tr>
                      <td>
                        El acompañamiento que recibí por parte de mi profesor(a)
                        fue adecuado (respuestas a dudas, asesoría,
                        retroalimentación, etc.):
                      </td>
                      <td>{teacher["05MET_Prom"]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))
      )}
      {/* <TeacherInfo />
      <TeacherQuestions />
      <TeacherComments /> */}
    </div>
  );
};

export default TeacherPage;
