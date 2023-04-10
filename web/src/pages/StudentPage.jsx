import Styles from './StudentPage.module.css';

import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const StudentPage = () => {
    const activeLinks = false;
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Bienvenido a la ECOA {data}</h2>
            <div className={Styles.videojuego}></div>
        </div>
    );
};

export default StudentPage;