import React from "react";

const Projects = () => {
  const projectdetails = [
    {
      name: "Delish Food App",
      loc: "delish.png",
      des: "I built it with React and API integration.",
      link: "https://delishfoodsite.vercel.app/",
    },
    {
      name: "ODISHA MASALA",
      loc: "ecom.png",
      des: "A simple online shopping site with cart and payment integration.",
      link: "",
    },
    {
      name: "Portfolio Website",
      loc: "pfolio.png",
      des: "My personal portfolio built using React.",
      link: "",
    },
    {
      name: "MERN AUTH App",
      loc: "auth.png",
      des: "A full-stack MERN AUTH app using MERN stack.",
      link: "https://user-auth-project.vercel.app/",
    },
    {
      name: "Netflix Clone",
      loc: "netflix.png",
      des: "My personal portfolio built using HTML, CSS, and JavaScript.",
      link: "",
    },
    {
      name: "Banking System",
      loc: "bank.jpg",
      des: "Banking system with Java , JDBC and My SQL",
      link: "",
    },
  ];

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg text-blue-400">My Work</p>
          <h2 className="text-3xl font-bold text-white">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectdetails.map((project, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
              <img
                src={`/assets/images/${project.loc}`}
                alt={`Project ${project.name}`}
                className="rounded-md md:w-full md:h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{project.name}</h3>
              <p className="text-gray-400">{project.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
