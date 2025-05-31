import React from "react";
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
import { IonIcon } from "@ionic/react";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const Skillssection = () => {
  const skills = [
    { icon: logoNodejs, title: "Node.js" },
    { icon: logoReact, title: "React" },
    { icon: logoHtml5, title: "HTML5" },
    { icon: logoCss3, title: "CSS3" },
    { icon: code, title: "Java" },
    { icon: brushOutline, title: "UI/UX Design" },
    { icon: <SiExpress size={40}  />, title: "Express" }, // ✅ Direct JSX
    { icon: <SiMongodb size={40} />, title: "MongoDB" }, // ✅ Direct JSX
    { icon: <SiMysql size={40}  />, title: "MySQL" }, // ✅ Direct JSX

  ];
  return (
    <section className="py-20    bg-gray-900 text-white   ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg text-blue-400">Skills I Have Acquired</p>
          <h2 className="text-3xl font-bold">My Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">
                <IonIcon icon={skill.icon} />
              </div>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="text-gray-400 mt-2">
                I have hands-on experience with {skill.title}, delivering
                high-quality projects.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillssection;
