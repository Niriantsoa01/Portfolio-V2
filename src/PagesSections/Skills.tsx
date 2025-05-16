import React from 'react'
import "../Styles/Skills.css"
import SkillsComponents from '../components/SkillsComponents'
import useInView from '../lib/useInView';

function Skills() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <>
        <div
          ref={ref}
          className={`bg-gray-900 text-white py-5 justify-center transition-opacity duration-1000 ease-in-out ${
            inView ? 'animate__animated animate__zoomIn opacity-100' : 'opacity-0'
          }`}
          id='skills'
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Mes compétences
            </h3>
              <SkillsComponents/>
          </div>
        </div>
    </>
  )
}

export default Skills
