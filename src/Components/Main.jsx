// import { downloadOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Photosection from "./Photosection";

import {
  logoNodejs,
  logoReact,
  logoHtml5,
  logoCss3,
  code,
  brushOutline,
  logoTailwindCss,
  logoDatabase,
  logoGithub,
} from "ionicons/icons";
import Skillssection from "./Skillssection";
import Projects from "./Projects";
import About from "./About";
// import { IonIcon } from "@ionic/react";

const Main = () => {
  const skills = [
    { icon: logoNodejs, title: "Node.js" },
    { icon: logoReact, title: "React" },
    { icon: logoHtml5, title: "HTML5" },
    { icon: logoCss3, title: "CSS3" },
    { icon: code, title: "Java" },
    { icon: brushOutline, title: "UI/UX Design" },
  ];

  return (
    <main className="bg-gray-900 text-white">
      <article>
        <Photosection />

        <Skillssection />

        <Projects />
        <About/>
      </article>
    </main>
  );
};

export default Main;
