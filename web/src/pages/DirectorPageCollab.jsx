import Styles from './DirectorPageCollab.module.css';

import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

const DirectorPageCollab = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Colaborador</h2>
            <Searchbar />
        </div>
    );
};

export default DirectorPageCollab;