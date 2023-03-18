import Navbar from "../components/Navbar";

const DirectorPageServices = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Servicios</h2>
        </div>
    );
};

export default DirectorPageServices;