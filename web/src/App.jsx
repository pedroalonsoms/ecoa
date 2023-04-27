import "./App.css";
import {Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import AdministratorSurveysPage from "./pages/AdministratorSurveyPage";
import AdministratorQuestionsPage from "./pages/AdministratorQuestionPage";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} > 
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={["STUDENT"]} />}>
          <Route path="student" element={<StudentPage />} />
          <Route path="game" element={<StudentPage />} />
          {/* <Route path="game?studentRegistration=:studentRegistration" element={<StudentPage />} /> */}
        </Route>

        <Route element={<RequireAuth allowedRoles={["TEACHER"]} />}>
          <Route path="teacher" element={<TeacherPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMINISTRATOR"]} />}>
          <Route path="administrator/surveys" element={<AdministratorSurveysPage />} />
          <Route path="administrator/questions" element={<AdministratorQuestionsPage />} />
        </Route>
        
        {/* Catch All */}
        <Route path="*" element={<Error404 />} />

        {/* Redirect using local storage */}
        <Route path="/" element={localStorage.getItem("auth").role == "STUDENT" && <StudentPage />} />
        <Route path="/" element={localStorage.getItem("auth").role == "TEACHER" && <TeacherPage />} />
        <Route path="/" element={localStorage.getItem("auth").role == "ADMINISTRATOR" && <AdministratorSurveysPage />} />
      </Route>
    </Routes>
  );
};

export default App;
