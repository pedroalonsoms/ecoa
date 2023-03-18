import Navbar from "../components/Navbar";

const DirectorPageQuestions = () => {
    const activeLinks = true;
    return (
        <div>
            <Navbar showLinks={activeLinks} />
            <h2>Preguntas</h2>
        </div>
    );
}

export default DirectorPageQuestions;