import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/kathick (2).jpg";

function About() {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="text-center my-10">
        <motion.h1
          className="text-5xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Karthick
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
 A <span className="text-blue-400">22-year-old</span> Backend Developer and DevOps Engineer with {" "}
<span className="text-blue-400">1.5 Years</span> of Experience

        </motion.p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-60 h-60 md:w-70 md:h-70 rounded-full shadow-lg border-4 border-blue-400 object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
        </Tilt>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-2">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a <span className="text-blue-400 font-semibold">Backend Java Developer</span> with
            <span className="text-blue-400"> 1.5 years</span> of experience specializing in
            <span className="text-blue-400"> Spring Boot, Hibernate, and database design</span>. I have
            expertise in building <span className="text-blue-400">scalable applications</span> and designing
            <span className="text-blue-400"> robust database structures</span>.
          </p>
          
          <h3 className="text-2xl font-semibold text-blue-400 mt-3">Leadership & Mentorship</h3>
          <p className="text-gray-300 text-lg">
            I have been a <span className="text-blue-400">Team Leader</span> and <span className="text-blue-400">Java Spring Boot Trainer </span>
            {" "} for over a year, mentoring developers and helping them improve their skills.
          </p>
          
          <h3 className="text-2xl font-semibold text-blue-400 mt-3">Problem-Solving & Competitive Programming</h3>
          <p className="text-gray-300 text-lg">
            I have solved <span className="text-blue-400">300+ LeetCode problems</span> in Java, enhancing my
            problem-solving skills and algorithmic thinking.
          </p> 

          <h3 className="text-2xl font-semibold text-blue-400 mt-3">DevOps & Cloud Technologies</h3>
          <ul className="text-gray-300 text-lg list-disc list-inside">
            <li>Docker, Kubernetes, Jenkins for CI/CD and containerization</li>
            <li>Linux & AWS for cloud infrastructure management</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-400 mt-3">Advanced System Automation</h3>
          <p className="text-gray-300 text-lg">Worked with <span className="text-blue-400">Kafka, Rule and Drools</span> for automating complex systems.</p>

         
        </motion.div>
      </div>
    </section>
  );
}

export default About;
