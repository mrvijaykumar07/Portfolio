import React from "react";
import { downloadOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
const Photosection = () => {

  return (
    <section className="hero bg-gray-800 py-20 mx-auto flex w-full h-screen  px-2  md:px-44">
      <div className="flex flex-col  justify-center container  px-6">
        <h1 className="md:text-8xl text-7xl font-bold mb-3">Bijaya</h1>
        <h1 className="md:text-8xl text-7xl font-bold mb-3"> Kumar</h1>
        <p className="text-xl text-gray-50 font-bold">MERN - Stack Developer</p>

        <div>
          <p className="mt-6 text-lg max-w-2xl ">
            Hi, I’m Bijaya Kumar Behera, a creative web & app developer
            passionate about building impactful digital solutions.
          </p>

          <a
            href="/assets/Bijaya_KUmar_Behera_CV.pdf"
            download="Bijaya_KUmar_Behera_CV.pdf"
            className="w-auto mt-6 inline-flex items-center bg-blue-600 px-5 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition font-bold"
          >
            
            <span className="mr-2">Download CV</span>
            <IonIcon icon={downloadOutline} />
          </a>
        </div>
        
      </div>

      <div className="mt-8">
        <img
          src="/assets/images/pphoto.jpg"
          alt="Bijaya Kumar"
          className="rounded-full w-[820px] h-[440px] object-cover border-4 border-gray-500 hidden md:block "
        />

      </div>
    </section>
  );
};

export default Photosection;
