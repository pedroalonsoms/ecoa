import Styles from './StudentPage.module.css';

import Navbar from '../components/Navbar';

const StudentPage = () => {
    const activeLinks = false;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Bienvenido a la ECOA Adrián Alejandro Ramírez Cruz</h2>
            <div className={Styles.videojuego}></div>
        </div>
    );
};

export default StudentPage;