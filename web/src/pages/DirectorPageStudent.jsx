import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

const DirectorPageStudent = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Alumno</h2>
            <Searchbar />
        </div>
    );
};

export default DirectorPageStudent;