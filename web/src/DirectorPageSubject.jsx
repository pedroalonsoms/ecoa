import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

const DirectorPageSubject = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Materia</h2>
            <Searchbar />
        </div>
    );
};

export default DirectorPageSubject;