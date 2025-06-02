

import Photosection from "./Photosection";


import Skillssection from "./Skillssection";
import Projects from "./Projects";
import About from "./About";


const Main = () => {

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
