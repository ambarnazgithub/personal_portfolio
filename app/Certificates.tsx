'use client';
import { motion } from 'framer-motion';

const certificates = [
  {
    name: "Web development ",
    authority: "SMIT (Saylani Mass IT Training)",
    image: "/certificate/Web-C.jpg"
  },
 
  {
    name: "12-Hour Hackathon",
    authority: "SMIT (Saylani Mass IT Training)",
    image: "/certificate/femhack.jpg"
  },
  {
    name: "Internship",
    authority: "DevSpark",
    image: "/certificate/Internship.jpg"
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="w-full bg-[#05050a] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute left-0 top-12 w-72 h-72 rounded-full bg-[#C3B1E1]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Certifications
        </motion.h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] justify-center">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(195,177,225,0.2)] hover:bg-white/[0.06] hover:border-[#C3B1E1]/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="h-78 overflow-hidden relative bg-[#0b1320]">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400">{cert.authority}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;