import React from "react";
import "../Styles/Project.css";
import useInView from '../lib/useInView';

import PanthereImg from "../assets/panthere.png";
import Game from "../assets/GameDesign.png";
import Car from "../assets/Car.png";
import Fanta from "../assets/fanta.png";
import Todo from "../assets/todo.png";
import Youtube from "../assets/youtube.png";
import DesignYas from "../assets/DesignYas.PNG";
import Resaka from "../assets/Resaka.PNG";
import Lyrics from "../assets/Lyrics.PNG";

const Project = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  const projects = [
    {
      name: "Web Design",
      description: "Création de maquette de sites web avec Figma",
      imageUrl: PanthereImg,
      siteUrl:
        "https://www.figma.com/design/1eICSljrBXIwfiwbn6qJt8/Projet_BLACK_PANTHER?node-id=0-1&t=TpXhfpMEvMaTeYSS-1",
    },
    {
      name: "Design de jeux",
      description: "Création de maquette de jeux avec Figma",
      imageUrl: Game,
      siteUrl:
        "https://www.figma.com/design/3j0QcHjwGkYBOq7QtsLgB5/Game?node-id=0-1&amp;t=TVtkf33jripwNO7R-1",
    },
    {
      name: "Site web de Fanta",
      description:
        "Création d'un site web pour la marque Fanta avec JavaScript",
      imageUrl: Fanta,
      siteUrl: "https://niriantsoa01.github.io/Fanta-Website/",
    },
    {
      name: "Todo List App",
      description: "Création d'un site web de gestion de tâches avec React",
      imageUrl: Todo,
      siteUrl: "https://todo-reactjs-zeta.vercel.app/",
    },
    {
      name: "Clonage Youtube",
      description:
        "Reproduction de  site web de Youtube de vidéos avec React et Tailwind CSS",
      imageUrl: Youtube,
      siteUrl: "https://youtube-clone-seven-tawny.vercel.app/",
    },
    {
      name: "Jeu de voiture",
      description: "Création de jeu de course avec JavaScript",
      imageUrl: Car,
      siteUrl: "https://niriantsoa01.github.io/Car-Game/",
    },
    {
      name: "Design de L'application Yas",
      description: "Création de maquette d'application Yas avec Figma",
      imageUrl: DesignYas,
      siteUrl: "https://www.figma.com/design/bHs37o8JZTAmtAnUmo2TCh/SAYNA-UIUX-PROD?node-id=0-1&t=X1FDW6Z6sNkgBa77-1",
    },
    {
      name: "Application E-Resaka",
      description: "Création d'un site web de discussion avec PHP, TailwindCss et MySQL",
      imageUrl: Resaka,
      siteUrl: "https://e-resaka.42web.io/index.php",
    },
    {
      name: "Application Lyrics",
      description: "Création d'une application de recherche de paroles de chansons avec React TailwindCss et ExpressJs",
      imageUrl: Lyrics,
      siteUrl: "https://lyrics-niriantsoa.vercel.app/",
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className={`bg-gray-900 text-white py-5 flex justify-center transition-opacity duration-2000 ease-in-out ${
          inView ? 'animate__animated animate__zoomIn opacity-100' : 'opacity-0'
        }`}
        id="projects"
      >
        <div className="text-center mt-5">
          <h3 className="text-3xl font-bold mb-4">Projets</h3>
          <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <div key={index} className="p-2 max-w-xs mx-auto bg-gray-900 shadow-lg sm:max-w-md md:max-w-xs lg:max-w-lg">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col justify-center text-center space-y-2 p-4">
                  <h4 className="text-2xl font-bold text-gray-300">
                    {project.name}
                  </h4>
                  <p className="text-md text-gray-200">
                    {project.description}
                  </p>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white"
                    >
                      Voir projet
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
