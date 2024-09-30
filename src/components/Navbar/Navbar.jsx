import React, { useState, useEffect } from "react";
import Logo from "../Logo";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to change the navbar styling
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
  };

  return (
    <>
      <nav
        className={` border shadow-sm fixed w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-gray-200 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto  px-20 py-3 flex items-center justify-between  ">
          {/* Left side - Logo */}
          <div className="sm:w-20 md:w-24 ">
            <Logo width="" />
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex space-x-10  ">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-black hover:text-orange-700 transition duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
