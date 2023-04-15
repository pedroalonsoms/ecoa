import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import AdministratorSurveysPage from "./pages/AdministratorSurveysPage";
import AdministratorQuestionsPage from "./pages/AdministratorQuestionPage";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <LoginPage />,
//     },
//     {
//         path: "/login",
//         element: <LoginPage />,
//     },
//     {
//         path: "/student",
//         element: <StudentPage />,
//     },
//     {
//         path: "/teacher",
//         element: <TeacherPage />,
//     },
//     {
//         path: "/administrator/surveys",
//         element: <AdministratorSurveysPage />,
//     },
//     {
//         path: "/administrator/questions",
//         element: <AdministratorQuestionsPage />,
//     },
// ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route
          path="/administrator/surveys"
          element={<AdministratorSurveysPage />}
        />
        <Route
          path="/administrator/questions"
          element={<AdministratorQuestionsPage />}
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
};

export default App;
