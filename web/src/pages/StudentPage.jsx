import Styles from "./StudentPage.module.css";

import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const StudentPage = () => {
  const activeLinks = false;
  const location = useLocation();
//   console.log(location);

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Bienvenido a la ECOA {location.state.data.fullName}</h2>
      <div className={Styles.container}>
        <iframe className={Styles.game} src="/game"></iframe>
      </div>
    </div>
  );
};

export default StudentPage;
