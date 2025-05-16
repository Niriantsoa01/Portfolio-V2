import { useState } from 'react'
import "../Styles/Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 py-4  fixed top-0 w-full z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">Niriantsoa .</div>
          {/* Burger menu button visible on small screens */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Horizontal menu - hidden on small screens */}
          <ul className="hidden md:flex space-x-4 font-semibold mx-auto">
            <li>
              <a href="#home" className="text-white hover:text-gray-400">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-400">
                A propos
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-gray-400">
                Expertise
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-gray-400">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile menu - visible when burger menu is open */}
          <ul className={`md:hidden bg-gray-800 font-semibold uppercase text-center space-y-2 py-3 overflow-hidden transition-all duration-500 ease-in-out 
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <li>
              <a href="#home" className="block text-white hover:text-gray-400">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="block text-white hover:text-gray-400">
                A propos
              </a>
            </li>
            <li>
              <a href="#skills" className="block text-white hover:text-gray-400">
                Expertise
              </a>
            </li>
            <li>
              <a href="#project" className="block text-white hover:text-gray-400">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar
