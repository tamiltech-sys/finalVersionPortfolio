import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaDatabase, FaCode, FaBug, FaTools } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    title: "System Design",
    description:
      "Designing scalable and efficient systems for creating new products. \n- Defining entities, relationships, and data flow. \n- Ensuring scalability and performance optimization. \n- Managing one-way and two-way data binding constraints in relationships.",
    icon: <FaProjectDiagram className="text-green-500 text-5xl" />,
  },
  {
    title: "Backend Java, Spring Boot & Hibernate Development",
    description:
      "Developing robust backend solutions using Java, Spring Boot, and Hibernate for scalable applications. \n- Implementing RESTful APIs and microservices. \n- Integrating authentication and security best practices. \n- Managing database interactions efficiently with Hibernate ORM.",
    icon: <FaCode className="text-green-500 text-5xl" />,
  },
  {
    title: "Solving Critical Problems & Providing Solutions",
    description:
      "Identifying, analyzing, and solving complex problems to optimize business processes. \n- Debugging and troubleshooting production issues. \n- Enhancing system performance and reliability.",
    icon: <FaBug className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Jenkins CI/CD & Docker",
    description:
      "Implementing CI/CD pipelines with Jenkins and containerizing applications with Docker. \n- Automating deployment workflows. \n- Managing containerized environments for scalability.",
    icon: <FaTools className="text-red-500 text-5xl" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Offering top-tier skills in database design, backend development,
          problem-solving, and DevOps automation.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex"
          >
            <Tilt options={{ max: 15, scale: 1.05 }} className="w-full h-full">
              <div className="bg-black p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-110 transition-transform duration-300 w-full h-full min-h-[250px] flex-grow border border-gray-700">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-3 text-gray-300 text-sm whitespace-pre-line flex-grow">
                  {service.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
