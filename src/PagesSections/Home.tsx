import React from 'react'
import TypingText from '../components/TypingText'
import "../Styles/Home.css"
import useInView from '../lib/useInView';

function Home() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <>
        <div
          ref={ref}
          className={`bg-gray-900 text-white flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'
          }`}
          id='home'
        >
          <div className="text-center mt-20">
            <h3 className="text-3xl font-bold mb-4">
              Hello World
            </h3> 
            <h1 className="text-7xl font-bold mb-4">
            <TypingText words={["Je suis Niriantsoa"]}/>
            </h1>
            <h2 className="text-5xl text-center font-bold text-gray-200 animate-pulse transition duration-500 ease-in-out transform hover:scale-105">
            Developpeur Web & <br /> Designer UI/UX</h2>
          </div>
        </div>
    </>
  )
}

export default Home
