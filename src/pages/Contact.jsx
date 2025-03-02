import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:karthicksaravanan663@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message
    )}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;

    window.location.href = mailtoLink;
  };

  // Function to Download Resume
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "public/my-resume.pdf"; // Path to your PDF
    link.download = "Karthick_Resume.pdf"; // Rename file if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Contact Info */}
        <motion.div
          className="bg-black-900 p-6 rounded-xl shadow-lg max-w-md w-full border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-300 mb-4">
            Feel free to reach out for collaborations or job opportunities.
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:karthicksaravanan663@gmail.com"
                className="hover:underline"
              >
                karthicksaravanan663@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-blue-400" /> 6382930003
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-blue-400" /> Madurai, Tamil Nadu
            </p>

            {/* WhatsApp & Instagram Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/916382930003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 text-2xl"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/___karthick__._/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Download Resume Button */}
          <motion.button
            onClick={downloadResume}
            className="mt-6 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 w-full"
            whileHover={{ scale: 1.1 }}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-black-900 p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Send a Message
          </h3>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="border border-gray-700 block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center"
            whileHover={{ scale: 1.1 }}
            onClick={handleSubmit}
          >
            Send Message
          </motion.button>

          {isSent && (
            <p className="text-green-400 mt-4">Message sent successfully!</p>
          )}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </motion.form>
      </div>
      <motion.button></motion.button>
    </section>
  );
}

export default Contact;
