import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.h1
          className="text-2xl font-bold hover:text-blue-400 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          My Portfolio
        </motion.h1>

        {/* Hamburger Menu Button (for mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {[ "About","Skill", "Projects","Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-blue-400 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-50} // Adjust offset for better alignment
                className="cursor-pointer"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Animated) */}
      <motion.div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-gray-800 p-6 shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <button
          className="text-white text-2xl mb-4"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col gap-4">
        {[ "About","Skill", "Projects","Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-blue-400 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
