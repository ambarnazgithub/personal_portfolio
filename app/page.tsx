'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Loader from "./Loader";
import HeroSection from "./HeroSection"; // New HeroSection import
import About from "./About";

const Projects = dynamic(() => import("./Projects"));
const Skills = dynamic(() => import("./Skills"));
const Education = dynamic(() => import("./Education"));
const Certificates = dynamic(() => import("./Certificates"));
const Contact = dynamic(() => import("./Contact"));
const Footer = dynamic(() => import("./Footer"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative bg-[#05050a] text-white">
      {!isLoaded && <Loader />}
      <Navbar />
      {/* New Hero Section */}
      <div className="relative">
        <HeroSection />
      </div>
      <div className="relative overflow-x-hidden">
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
