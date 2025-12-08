"use client";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { QuickStats } from "./components/QuickStats";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function Home() {
  // Project images from Unsplash
  const projectImages = {
    project1: "/images/project1.jpg",
    project2: "/images/project2.jpg",
    project3: "/images/project3.jpg",
    project4: "/images/project4.jpg",
    project5: "/images/project5.jpg",
    project6: "/images/project6.jpg",
  };

  // const portraitUrl = "";

  return (
    <div className="min-h-screen bg-bg text-foreground">
      <Navigation />
      <main>
        <Hero /*portraitUrl={portraitUrl}*/ />
        <QuickStats />
        <Projects projectImages={projectImages} />
        <Experience />
        <Skills />
         <About /> 
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}






