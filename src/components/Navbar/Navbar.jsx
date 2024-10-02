import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set sticky background color change
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamically set active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contacts", id: "contacts" },
  ];

  // Function to scroll to section on button click
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust offset for navbar height
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close the menu on link click
  };

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <nav
        className={`  h-16 border shadow-sm fixed w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-gray-200 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5  md:px-20 py-3 flex items-center justify-between  ">
          {/* Left side - Logo */}
          <div
            className=" cursor-pointer "
            onClick={() => scrollToSection("home")}
          >
            <Logo width="" />
          </div>

          
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            {/* Right side - Hamburger icon for small screens */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none"
              >
                {/* Toggle between menu open and close icons */}
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          
          {/* Right side - Navigation Links */}
          <div className="hidden md:flex space-x-10 lg:space-x-10 ">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-black hover:text-orange-700 transition duration-200 ${
                  activeSection === link.id ? "text-orange-700" : ""
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          
        </div>

        {/* Mobile Menu - Show when hamburger is clicked */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-6 py-2 text-black hover:text-orange-700 transition duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
