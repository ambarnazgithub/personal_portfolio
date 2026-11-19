
'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Mail, Copy, Check, FileDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef } from 'react';

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ambarnax@gmail.com';
  const cvPath = '/Ambar-Naz.pdf';

  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking values Torch Effect k liye
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Torch ko smooth karne k liye spring
  const torchX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const torchY = useSpring(mouseY, { stiffness: 120, damping: 250 });

  // Mouse Movement Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Parallax Transforms
  const textY = useTransform(smoothProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  const handleEmailClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
    } else if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const firstName = "Ambar ".split("");
  const lastName = "Naz".split("");

  // Torch Overlay Style
  const torchStyle = {
    background: useTransform(
      [torchX, torchY],
      ([latestX, latestY]) => 
        `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(195,177,225,0.12) 0%, rgba(8,8,16,0) 80%)`
    )
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative w-full overflow-hidden bg-[#05050a] flex flex-col justify-between group select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── DESKTOP ONLY BACKGROUND IMAGE ── */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none hidden md:block" style={{ scale: bgScale }}>
        <div className="absolute right-0 top-0 w-[45%] h-full opacity-80">
          <Image
            src="/profilePic.png"
            alt="Ambar Naz Desktop"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        {/* Gradients for smooth blending on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/80 to-[#05050a]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/40 to-transparent" />
      </motion.div>

      {/* Tech Grid Lines (Universal) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Dynamic Torch Light Effect (Desktop Only) */}
      <motion.div 
        className="absolute inset-0 z-10 hidden md:block mix-blend-screen pointer-events-none" 
        style={torchStyle} 
      />

      {/* ── CORE HERO CONTENT GRID ── */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 px-6 md:px-12 pt-28 pb-16 my-auto z-10 relative items-center">
        
        {/* LEFT COLUMN: THE PREMIUM CONTENT */}
        <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center">
          <motion.div style={{ y: textY, opacity: textOpacity }} className="flex flex-col gap-0">
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#C3B1E1]/10 to-transparent border border-[#C3B1E1]/20 px-4 py-1.5 rounded-full w-fit mb-5 text-[#C3B1E1] text-xs font-semibold uppercase tracking-widest backdrop-blur-md"
            >
              <Sparkles size={12} className="animate-pulse" /> Available For Hire
            </motion.div>

            {/* Main Name Render */}
            <div className="flex flex-col mb-4">
              <h1 className="font-extrabold leading-none tracking-tighter flex flex-wrap text-[#C3B1E1]" style={{ fontSize: 'clamp(45px, 6vw, 90px)', fontFamily: 'Syne, sans-serif' }}>
                {firstName.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.215, 0.610, 0.355, 1] }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>

              <h1 className="font-extrabold leading-none tracking-tighter flex flex-wrap text-white ml-8 md:ml-16" style={{ fontSize: 'clamp(45px, 6vw, 90px)', fontFamily: 'Syne, sans-serif' }}>
                {lastName.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: (index + firstName.length) * 0.05, ease: [0.215, 0.610, 0.355, 1] }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* ── MOBILE ONLY IMAGE BLOCK ── */}
            {/* Ye block mobile par name k foran baad photo show karega taake face hide na ho */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden mb-6 border border-white/5 md:hidden"
            >
              <Image
                src="/profilePic.png"
                alt="Ambar Naz Mobile"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent" />
            </motion.div>

            {/* MERN STACK DEVELOPER HEADING */}
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent tracking-tight mb-4"
            >
              Building High-End <span className="text-[#C3B1E1]">MERN Stack</span>  Web Applications
            </motion.h2>

            {/* Short Punchy Professional Bio */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed mb-8 font-light"
            >
              Specializing in full-stack architecture, clean code practices, and premium pixel-perfect UI/UX design. Transforming complex logic into beautiful, responsive digital experiences.
            </motion.p>

            {/* CALL TO ACTIONS (CTAs) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-4 items-center z-20"
            >
              {/* Email Button */}
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 bg-white text-[#05050a] px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#C3B1E1] active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.1)] group"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-600" />
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Mail size={16} className="transition-transform group-hover:rotate-12" />
                    <span>Let's Talk</span>
                    <span className="hidden sm:inline opacity-40 text-xs border-l border-black/20 pl-2">
                      <Copy size={12} className="inline mr-1" /> Copy
                    </span>
                  </>
                )}
              </button>

              {/* Download CV Button */}
              <a
                href={cvPath}
                download
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-md"
              >
                <FileDown size={16} className="text-[#C3B1E1]" />
                <span>Download CV</span>
              </a>
            </motion.div>

          </motion.div>
        </div>

        {/* RIGHT COLUMN: KHALI GRID AREA FOR DESKTOP BALANCE */}
        <div className="hidden md:block md:col-span-4 lg:col-span-5 pointer-events-none" />
        
      </div>

      {/* ── FOOTER: PRO SCROLL INDICATOR ── */}
      <div className="w-full pb-6 flex justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest"
        >
          <span>Scroll Down</span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-[#C3B1E1] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;