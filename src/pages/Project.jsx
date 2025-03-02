import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const projects = [
  { title: "MLM with Admin Panel", description: "A multi-level marketing platform with robust admin controls.", img: "/mlm.jpg" },
  { title: "E-Commerce Platform", description: "A feature-rich e-commerce platform with payment integration.", img: "/ecommerce.jpg" },
  { title: "Quasar ERP", description: "An enterprise resource planning system built with Quasar.", img: "/erp.jpg" },
  { title: "Hotel Management System", description: "A complete hotel booking and management solution.", img: "/hotel.jpg" },
  { title: "Queuing System", description: "An automated queuing system for efficient customer service.", img: "/queuing.png" },
  { title: "Microfinance System", description: "A microfinance application for loan and credit management.", img: "/microfinance.jpg" }
];

// Project details mapped by title
const projectDetails = {
  "MLM with Admin Panel": {
    technologies: ["Java", "Spring Boot", "Hibernate", "Razorpay (Payment Gateway)"],
    description: [
      "Designed a multi-level marketing system with complex income calculations.",
      "Integrated Razorpay for seamless transactions.",
      "Automated customer onboarding and process workflows."
    ]
  },
  "E-Commerce Platform": {
    technologies: ["Java", "Spring Boot", "Hibernate"],
    description: [
      "Built a scalable e-commerce system with product and order management.",
      "Integrated payment gateways for seamless transactions.",
      "Developed an admin panel for tracking and analytics."
    ]
  },
  "Quasar ERP": {
    technologies: ["Java", "Spring Boot", "Vue.js (Quasar Framework)"],
    description: [
      "Developed backend services for ERP functionalities.",
      "Implemented Quasar framework for frontend components.",
      "Optimized performance for large-scale business operations."
    ]
  },
  "Hotel Management System": {
    technologies: ["Java", "Spring Boot", "Hibernate"],
    description: [
      "Created a hotel booking and management system.",
      "Implemented real-time room availability tracking.",
      "Developed a secure payment and invoicing system."
    ]
  },
  "Queuing System": {
    technologies: ["Java", "Spring Boot", "Hibernate"],
    description: [
      "Automated queue management for customer service.",
      "Developed appointment scheduling and tracking.",
      "Improved efficiency by eliminating manual queues."
    ]
  },
  "Microfinance System": {
    technologies: ["Java", "Spring Boot", "Hibernate", "Microservices Architecture"],
    description: [
      "Implemented loan application and approval workflows.",
      "Developed repayment tracking and risk assessment modules.",
      "Integrated microservices for better scalability."
    ]
  }
};

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setLoading(true);
      setTimeout(() => setLoading(false), 500); // Simulate loading delay
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      <motion.h2 className="text-4xl font-extrabold text-center text-blue-400 mb-12 tracking-wider" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        🚀 My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={0.9} transitionSpeed={400} className="hover:shadow-xl">
            <motion.div className="relative bg-opacity-30 bg-black-800 backdrop-blur-lg border border-black-700 rounded-xl shadow-lg p-4 transition-all duration-500 hover:shadow-blue-500/70 overflow-hidden min-h-[350px]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ scale: 1.1 }}>
              <motion.img src={project.img} alt={project.title} className="object-fill w-full h-40 sm:h-40 md:h-30 my-3 object-cover shadow-lg transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold mt-2 text-blue-400 transition-transform duration-300 hover:scale-105">{project.title}</h3>
              <p className="text-black-300 text-sm mt-1 leading-relaxed">{project.description}</p>
              <motion.button className="mt-3 px-4 py-1 bg-black-800 text-white border border-black-600 rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 shadow-md relative overflow-hidden group text-sm" whileHover={{ scale: 1.1 }} onClick={() => setSelectedProject(project.title)}>More</motion.button>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto z-50 p-4 sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-2xl overflow-y-auto scrollbar-hidden max-w-md sm:max-w-lg w-full h-auto border border-blue-500 relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
              
              {loading ? (
                <p className="text-center text-white">Loading...</p>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-blue-400">{selectedProject}</h2>

                  <h3 className="text-xl font-semibold mt-4 text-white">📌 Description</h3>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    {projectDetails[selectedProject]?.description?.map((point, index) => (
                      <li key={index}>{point}</li>
                    )) || <li>No additional details available.</li>}
                  </ul>

                  <h3 className="text-xl font-semibold mt-4 text-white">🛠 Technologies Used</h3>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    {projectDetails[selectedProject]?.technologies?.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    )) || <li>N/A</li>}
                  </ul>

                  <motion.button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={() => setSelectedProject(null)}>
                    <FaTimes size={24} color="red" />
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;
