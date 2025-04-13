import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div>
      <section className="relative bg-gray-100 py-20 px-6 md:px-16">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-lime-100 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black font-bold text-xl mb-2">Collaborative Mindset</h3>
            <p className="text-gray-600 mb-4">
              Develop a strong team dynamic and cultivate a collaborative work environment
              through specialized training activities.
            </p>
            <a href="#" className="text-gray-800 font-semibold">Learn More</a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-lime-400 p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black font-bold text-xl mb-2">Inspired Leadership</h3>
            <p className="text-gray-800 mb-4">
              Empower your team with result-driven leadership development programs for measurable performance improvement.
            </p>
            <h4 className="text-black font-bold mt-6">Engaged Workforce</h4>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{  type: "spring", stiffness: 300, damping: 20 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black font-bold text-xl mb-2">Teamwork Dynamics</h3>
            <p className="text-gray-600 mb-4">
              Create a high-performing team with OneThrive's unique building activities that tackle complex challenges and issues.
            </p>
            <a href="#" className="text-gray-800 font-semibold">Discover More</a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Features;


/*
const features = [
  {
    title: "Collaborative Mindset",
    description: "Develop a strong team dynamic with OneThrive’s enriching experiences.",
    image: Collab,
  },
  {
    title: "Inspired Leadership",
    description: "Empower your team with leadership experiences that drive real change.",
    image: "/images/feature2.png",
  },
  {
    title: "Teamwork Dynamics",
    description: "Cultivate high-performing teams through engaging team-building methods.",
    image: "/images/feature3.png",
  },
];

const Features = () => {
  return (
    <div className="bg-black">
    <section className="px-8 py-16 grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded shadow-md overflow-hidden">
          <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
    </div>
  );
};

export default Features;*/
