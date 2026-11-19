'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#05050a] py-20 md:py-32 px-6 md:px-12 z-20 overflow-hidden">
      <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-[#C3B1E1]/10 blur-3xl" />
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-[#C3B1E1]/5 blur-3xl" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-sm font-bold tracking-widest text-[#C3B1E1] uppercase mb-3">About Me</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ambar Naz
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-[#C3B1E1] mb-6">MERN Stack Developer</h3>
          
          <p className="text-gray-400 leading-relaxed text-lg mb-8">
            I am a passionate and motivated MERN Stack Developer with a strong foundation in building modern, scalable, and responsive web applications. Through hands-on experience and personal projects, I have developed proficiency in MongoDB, Express.js, React.js, and Node.js, along with front-end technologies like HTML, CSS, JavaScript, and Tailwind CSS. I am eager to contribute to dynamic development teams and grow in a professional setting.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-start md:items-end"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(195, 177, 225, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#C3B1E1] to-[#D4C6EB] text-black font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(195,177,225,0.2)]"
              >
                Hire Me
              </motion.button>
            </Link>
            <a href="/Ambar-Naz.pdf" download="Ambar-Naz.pdf" className="block">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(195, 177, 225, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-transparent border border-[#C3B1E1]/30 text-[#C3B1E1] font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm"
              >
                Download Resume
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;