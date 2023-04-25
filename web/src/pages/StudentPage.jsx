import Styles from "./StudentPage.module.css";

import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { Unity, useUnityContext, SendMessage } from "react-unity-webgl";

const StudentPage = () => {
  const activeLinks = false;
  const location = useLocation();
  console.log(location);

  const data = location.state.data;
  console.log(data);

  // const { unityProvider, sendMessage } = useUnityContext({
  //   loaderUrl: "./game/dist/Build/dist.loader.js",
  //   dataUrl: "./game/dist/Build/dist.data.br",
  //   frameworkUrl: "./game/dist/Build/dist.framework.js.br",
  //   codeUrl: "./game/dist/Build/dist.wasm.br",
  // });

  function sendName(name) {
    SendMessage("GameController", "ReceiveName", name);
  }

  setTimeout(() => {
    console.log("Sending name to game");
    sendName(data.fullName);
  }, 10000);

  return (
    <div>
      <Navbar showLinks={activeLinks} />
      <h2>Bienvenido a la ECOA <span id="name">{location.state.data.fullName}</span></h2>
      <div className={Styles.container}>
        <iframe className={Styles.game} src="/game"></iframe>
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
