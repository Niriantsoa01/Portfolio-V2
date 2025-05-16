import React from 'react'
import Me from "../assets/zah.png";
import CV from "../cv/Niriantso.pdf";
import "../Styles/About.css"
import useInView from '../lib/useInView';

function About() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <>
        <div
          ref={ref}
          className={`bg-gray-900 text-white h-screen flex justify-center transition-opacity duration-1000 ease-in-out ${
            inView ? 'animate__animated animate__zoomIn opacity-100' : 'opacity-0'
          }`}
          id='about'
        >
          <div className="text-center">
            {/*Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
              <div className="flex justify-center items-center py-5 rounded-lg">
               <img src={Me} alt="My profile" 
                className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
               />
              </div>
              <div className="p-5 rounded-lg flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl font-bold mb-4">A propos</h3>
                <p className="text-lg text-gray-300 text-justify px-7">
                Passionné par le monde de l'informatique. J'ai toujours aimé devenir 
                développeur web et designer. J'ai toujours été intéressé par le monde du 
                développement web et design. Je souhaite mettre mes compétences à profit pratiquer 
                tout en accomplissant des tâches et en relevant des défis et opportunités. 
                J'ai également réalisé non seulement des projets mais aussi d'autres projets communautaires.
                </p>
                <button className='button'>
                  <a href={CV} target="_blank" rel="noopener noreferrer" download="Niriantsoa.pdf">
                    <span className="text-lg text-gray-300 hover:text-gray-500">
                      Télecharger mon CV
                    </span>
                  </a>
                </button>
              </div>
             </div> 
          </div>
        </div>
    </>
  )
}

export default About
