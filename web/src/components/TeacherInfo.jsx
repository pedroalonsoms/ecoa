import Styles from "./TeacherInfo.module.css";

const TeacherInfo = () => {
  return (
    <div>
      <div className={Styles.profileImg}></div>
      <div className={Styles.profileInfo}>
        <p>Nomina</p>
        <p>Nombre del profesor</p>
        <p>Puesto</p>
        <p>
          Promedio General: <b>8.5</b>
        </p>
      </div>
    </div>
  );
};

export default TeacherInfo;
