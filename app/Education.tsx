'use client';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Web Development",
    institution: "SMIT (Saylani Mass IT Training Program)",
    period: "2025",
    description: "Completed a hands-on web development program with modern frontend and backend skills, focusing on real-world project delivery."
  },
  {
    degree: "Undergraduate in BSCS",
    institution: "IQRA UNIVERSITY",
    period: "2024",
    description: "Pursued undergraduate studies in Computer Science, gaining a solid academic foundation in programming and software concepts."
  },
  {
    degree: "Intermediate",
    institution: "BAMM PECHS College",
    period: "2022",
    description: "Completed intermediate education with a focus on Science and Mathematics."
  }
];

const Education = () => {
  return (
    <section id="education" className="relative w-full bg-[#05050a] py-20 md:py-32 px-6 md:px-12 z-20 overflow-hidden">
  <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-[#C3B1E1]/10 blur-3xl" />
  <div className="max-w-4xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
    >
     Education
    </motion.h2>
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-[#C3B1E1]/50 to-transparent" aria-hidden="true"></div>
          
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-16 pl-10 md:pl-0 flex md:justify-center"
            >
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-8">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-md shadow-lg hover:bg-white/[0.08] hover:border-[#C3B1E1]/30 transition-all duration-300"
                  >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-black uppercase bg-[#C3B1E1] rounded-full">{item.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                    <p className="text-lg font-medium text-gray-300 mb-4">{item.institution}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </div>
              {/* The circle on the line */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute left-2 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C3B1E1] rounded-full z-10 shadow-[0_0_10px_rgba(195,177,225,0.8)]"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;