import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 80; // Adjust this value as needed for spacing
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setIsOpen(false);
  };

  return (
    <nav className="bg-[#4DA1A9] text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-2 px-2">
        {/* Navbar Title */}
        <div
          className="flex items-left text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection('home')} >
          <img
            src='logos/pratikrutiLogo.png'
            alt="Pratikruti-2025"
            className="h-12 w-auto pl-2"
          />
          <img
            src='logos/pratikruti.png'
            alt="Pratikruti-2025"
            className="h-12 w-auto pr-2"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center space-x-8 py-2">
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection('schedule')}
          >
            Schedule
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection('register')}
          >
            Registration
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
          {/* Register Button */}
          <div className="text-center">
            <a
              href="https://forms.gle/DTq7Te4kmmarSrvS8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-2 py-2 text-md font-semibold text-white bg-[#2E5077] border-[#228a93] border-2 rounded-2xl shadow-2xl hover:bg-[#2E5077] hover:scale-105 active:bg-[#2E5077] focus:outline-none focus:ring-4 focus:bg-[#2E5077] transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-white h-screen flex flex-col items-center justify-start">
          <div className="mt-6 space-y-4">
            <button
              className="block text-lg px-4 py-2 hover:text-gray-300"
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button
              className="block text-lg px-4 py-2 hover:text-gray-300"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button
              className="block text-lg px-4 py-2 hover:text-gray-300"
              onClick={() => scrollToSection('schedule')}
            >
              Schedule
            </button>
            <button
              className="block text-lg px-4 py-2 hover:text-gray-300"
              onClick={() => scrollToSection('register')}
            >
              Registeration
            </button>
            <button
              className="block text-lg px-4 py-2 hover:text-gray-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
            {/* Register Button */}
            <div className="text-center">
              <a
                href="https://forms.gle/DTq7Te4kmmarSrvS8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-2 py-2 text-md font-semibold text-white bg-[#2E5077] border-[#228a93] border-2 rounded-2xl shadow-2xl hover:bg-[#2E5077] hover:scale-105 active:bg-[#2E5077] focus:outline-none focus:ring-4 focus:bg-[#2E5077] transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
