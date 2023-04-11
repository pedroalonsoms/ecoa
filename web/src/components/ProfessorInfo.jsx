import Styles from './ProfessorInfo.module.css';

const ProfessorInfo = () => {
    return (
        <div>
            <div className={Styles.profileImg}></div>
            <div className={Styles.profileInfo}>
                <p>Nomina</p>
                <p>Nombre del profesor</p>
                <p>Puesto</p>
                <p>Promedio General: <b>8.5</b></p>
            </div>
        </div>
    );
};

export default ProfessorInfo;