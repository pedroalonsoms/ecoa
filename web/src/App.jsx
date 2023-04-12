import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfessorPage from "./pages/ProfessorPage";
import StudentPage from "./pages/StudentPage";
import CollaboratorSurveysPage from "./pages/CollaboratorSurveysPage";
import CollaboratorQuestionsPage from "./pages/CollaboratorQuestionPage";

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
//         path: "/professor",
//         element: <ProfessorPage />,
//     },
//     {
//         path: "/collaborator/surveys",
//         element: <CollaboratorSurveysPage />,
//     },
//     {
//         path: "/collaborator/questions",
//         element: <CollaboratorQuestionsPage />,
//     },
// ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/professor" element={<ProfessorPage />} />
        <Route
          path="/collaborator/surveys"
          element={<CollaboratorSurveysPage />}
        />
        <Route
          path="/collaborator/questions"
          element={<CollaboratorQuestionsPage />}
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
};

export default App;
