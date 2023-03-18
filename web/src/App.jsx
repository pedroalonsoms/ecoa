import "./App.css";

import LoginPage from "./pages/LoginPage";
import ProfessorPage from "./pages/ProfessorPage";
import StudentPage from "./pages/StudentPage";
import DirectorPageCollab from "./pages/DirectorPageCollab";
import DirectorPageStudent from "./pages/DirectorPageStudent";
import DirectorPageSubject from "./DirectorPageSubject";
import DirectorPageServices from "./pages/DirectorPageServices";
import DirectorPageQuestions from "./pages/DirectorPageQuestions";

const App = () => {
    return (
        <div className="App">
            <LoginPage />
            {/* <StudentPage /> */}
            {/* <ProfessorPage /> */}
            {/* <DirectorPageCollab /> */}
            {/* <DirectorPageStudent /> */}
            {/* <DirectorPageSubject /> */}
            {/* <DirectorPageServices /> */}
            {/* <DirectorPageQuestions /> */}
        </div>
    );
}

export default App;
