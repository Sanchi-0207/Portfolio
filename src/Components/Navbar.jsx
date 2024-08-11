import React, { useState } from "react";

const Navbar = () => {
  const navItems = [
    { title: "Projects", id: "projects" },
    { title: "About Me", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Contact", id: "contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#121212] h-28 flex sticky shadow-2xl py-2.5  top-0 left-0 right-0 z-50">
      <div className="flex flex-wrap items-center justify-end w-full px-4 mx-auto">
        <div className="flex items-center lg:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-custom-white rounded-lg lg:hidden hover:bg-custom-green focus:outline-none focus:ring-2 focus:ring-custom-green dark:text-gray-400 dark:hover:bg-custom-green dark:focus:ring-custom-white"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`flex items-center justify-end lg:justify-center w-full lg:flex lg:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:w-[70%] w-[35%] justify-between">
            {navItems.map((item) => (
              <li className="relative group" key={item.id} onClick={menuItemClick}>
                <a
                  href={`#${item.id}`}
                  className="block py-2 pl-10 border-b font-poppins font-medium text-[#EBEBEB] transition-colors text-lg md:text-3xl border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0"
                >
                  {item.title}
                </a>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-custom-green transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;