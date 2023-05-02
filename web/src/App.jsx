import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import AdministratorSurveysPage from "./pages/AdministratorSurveyPage";
import AdministratorQuestionsPage from "./pages/AdministratorQuestionPage";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Error404 from "./pages/Error404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);

  const handleClick = (handleUser) => {
    setUser(handleUser);
  };

  console.log("user", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage handleClick={handleClick} />} />
        <Route
          path="/login"
          element={<LoginPage handleClick={handleClick} />}
        />
        <Route
          path="/student"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role == "STUDENT"}
              redirectTo="/login"
            >
              <StudentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role == "TEACHER"}
              redirectTo="/login"
            >
              <TeacherPage />
            </ProtectedRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role == "ADMINISTRATOR"}
              redirectTo="/login"
            />
          }
        >
          <Route
            path="/administrator/surveys"
            element={<AdministratorSurveysPage />}
          />
          <Route
            path="/administrator/questions"
            element={<AdministratorQuestionsPage />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

    // <Routes>
    //     <Route path="/" element={<Layout />}>
    //         {/* Public Routes */}
    //         <Route path="/" element={<LoginPage />} />
    //         <Route path="login" element={<LoginPage />} />

    //         {/* Protected Routes */}
    //         <Route element={<RequireAuth allowedRole={"STUDENT"} />}>
    //             <Route path="student" element={<StudentPage />} />
    //             <Route path="game" element={<StudentPage />} />
    //             {/* <Route path="game?studentRegistration=:studentRegistration" element={<StudentPage />} /> */}
    //         </Route>

    //         <Route element={<RequireAuth allowedRole={"TEACHER"} />}>
    //             <Route path="teacher" element={<TeacherPage />} />
    //         </Route>

    //         <Route element={<RequireAuth allowedRole={"ADMINISTRATOR"} />}>
    //             <Route
    //                 path="administrator/surveys"
    //                 element={<AdministratorSurveysPage />}
    //             />
    //             <Route
    //                 path="administrator/questions"
    //                 element={<AdministratorQuestionsPage />}
    //             />
    //         </Route>

    //         {/* Catch All */}
    //         <Route path="*" element={<Error404 />} />

    //         {/* Redirect using local storage */}
    //         {/* <Route
    //             path="/"
    //             element={
    //                 localStorage.getItem("auth").role == "STUDENT" && (
    //                     <StudentPage />
    //                 )
    //             }
    //         />
    //         <Route
    //             path="/"
    //             element={
    //                 localStorage.getItem("auth").role == "TEACHER" && (
    //                     <TeacherPage />
    //                 )
    //             }
    //         />
    //         <Route
    //             path="/"
    //             element={
    //                 localStorage.getItem("auth").role ==
    //                     "ADMINISTRATOR" && <AdministratorSurveysPage />
    //             }
    //         /> */}
    //     </Route>
    // </Routes>
  );
};

export default App;
