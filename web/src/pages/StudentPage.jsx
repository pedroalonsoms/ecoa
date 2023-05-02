import Styles from "./StudentPage.module.css";

import Navbar from "../components/Navbar";
import { useLocation, Navigate } from "react-router-dom";

const StudentPage = () => {
  const activeLinks = false;
  const location = useLocation();
  console.log("location");
  console.log(location);

  // try {
  //   const location = useLocation();
  //   // console.log(location);

  //   const data = location.state.data;
  //   // console.log(data);
  //   const name = location.state.data.fullName;
  // } catch (error) {
  //   // console.log(error);
  //   <Navigate to="/" />;
  // }

  // const { unityProvider, sendMessage } = useUnityContext({
  //   loaderUrl: "./game/dist/Build/dist.loader.js",
  //   dataUrl: "./game/dist/Build/dist.data.br",
  //   frameworkUrl: "./game/dist/Build/dist.framework.js.br",
  //   codeUrl: "./game/dist/Build/dist.wasm.br",
  // });

  // function sendName(name) {
  //   SendMessage("GameController", "ReceiveName", name);
  // }

  // setTimeout(() => {
  //   console.log("Sending name to game");
  //   sendName(data.fullName);
  // }, 10000);
  const name = location.state.dataSubmit.fullName;
  const urlGame = `/game?studentRegistration=${location.state.dataSubmit.registration}`;

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>
        Bienvenido a la ECOA <span>{name}</span>
      </h2>
      <div className={Styles.container}>
        <iframe className={Styles.game} src={urlGame}></iframe>
        {/* <Unity className={Styles.game} unityProvider={unityProvider} /> */}
        {/* <Unity
          src='/game'
          loader='/game/dist/Build/dist.loader.js'
          className={Styles.game}
        /> */}
      </div>
    </div>
  );
};

export default StudentPage;
