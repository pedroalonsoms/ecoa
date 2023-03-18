import Styles from './Links.module.css';

const Links = () => {
    return (
        <div className={Styles.links}>
            <a href="/">Alumno</a>
            <a href="/">Colaborador</a>
            <a href="/">Materia</a>
            <a href="/">Instalaciones</a>
            <a href="/">Preguntas</a>
        </div>
    );
};

export default Links;