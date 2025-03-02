import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll"; // Ensure you have react-scroll installed

function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-10 px-6 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo / Name with Smooth Side-to-Side Hover Effect */}
        <motion.h2
          className="text-3xl font-bold text-blue-400"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(0, 191, 255)",
            x: [-5, 5], // Moves slightly left and right
            transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
          }}
        >
          My Portfolio
        </motion.h2>

        {/* Social Icons with Slow Floating Animation */}
        <div className="flex gap-6 mt-4">
          {[
            // { icon: <FaGithub />, link: "https://github.com/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/karthick-saravanan-37b025264/" },
            // { icon: <FaTwitter />, link: "https://twitter.com/" },
            { icon: <FaEnvelope />, link: "mailto:karthicksaravanan663@email.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-blue-400 transition duration-300"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                x: [0, 5, -5, 5, 0], // Slow floating side-to-side effect
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer Links with Slow Floating Effect */}
        <motion.ul className="hidden md:flex gap-6 mt-6">
          {["About", "Skill", "Projects", "Services", "Contact"].map(
            (item, index) => (
              <motion.li
                key={index}
                className="hover:text-blue-400 cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: [-5, 5, -5, 0], // Moves up and down slowly on hover
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
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
            )
          )}
        </motion.ul>

        {/* Copyright */}
        <motion.p
          className="mt-6 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            scale: 1.05,
            x: [-3, 3, -3, 0], // Moves slightly side to side on hover
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;
