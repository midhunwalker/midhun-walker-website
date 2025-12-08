"use client";

import { useState, useRef } from "react";
import { ArrowRight, Mail, Github, Linkedin, Rocket, Briefcase, Zap, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  portraitUrl: string;
}

export function Hero({ portraitUrl }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
    setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-24 overflow-hidden"
      style={{
        background: "#0B1220",
      }}
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Aurora Glow Effects */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, #4A58FF, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(circle at 50% 50%, #7C3BFF, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, #6273FF, transparent 60%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          className="space-y-8 lg:order-1 order-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[14px] backdrop-blur-sm"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 20px rgba(106, 115, 255, 0.15)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-sm" style={{ color: "rgba(255, 255, 255, 0.90)" }}>
              Available for work
            </span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            className="tracking-tight text-4xl lg:text-[64px]"
            style={{
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#F0F4FF",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Midhun P
          </motion.h1>

          {/* Job Title */}
          <motion.h2
            className="text-xl lg:text-[28px]"
            style={{
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.90)",
              lineHeight: 1.3,
              marginTop: "14px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Developer & UI Designer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm lg:text-base"
            style={{
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginTop: "18px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I build scalable web apps and beautiful product interfaces. Specializing in React, Node.js, and UX-focused design that puts users first.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group gap-2 border-0 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #537CFF 0%, #7C3BFF 100%)",
                borderRadius: "12px",
                height: "48px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#ffffff",
                boxShadow: "0 4px 16px rgba(83, 124, 255, 0.3)",
              }}
              onClick={() => scrollToSection("#projects")}
            >
              See Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="group gap-2 border-0 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #6C5CFF 0%, #8A3BFF 100%)",
                borderRadius: "12px",
                height: "48px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#ffffff",
                boxShadow: "0 4px 16px rgba(108, 92, 255, 0.3)",
              }}
              onClick={() => scrollToSection("#contact")}
            >
              <Briefcase className="w-4 h-4" />
              Hire Me for Freelance
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm w-full sm:w-auto"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                height: "48px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "15px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.90)",
              }}
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Freelance Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[14px] backdrop-blur-sm"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 20px rgba(138, 59, 255, 0.15)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
          >
            <Zap className="w-4 h-4" style={{ color: "#A566FF" }} />
            <span className="text-sm" style={{ color: "rgba(255, 255, 255, 0.90)" }}>
              Open for Freelance Projects
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="mailto:your.email@example.com"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          className="relative flex items-center justify-center lg:order-2 order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Portrait with parallax effect */}
          <motion.div
            className="relative z-10"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative">
              {/* Soft Blue Glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(98, 115, 255, 0.4), transparent 70%)",
                  filter: "blur(60px)",
                  transform: "scale(1.3)",
                }}
              />

              {/* Double Ring Frame */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div
                  className="w-full h-full rounded-full p-1.5"
                  style={{
                    background: "linear-gradient(135deg, #6273FF 0%, #A566FF 100%)",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="/midhunPhoto.png"
                      alt="Professional portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Status Badge */}
          <motion.div
            className="absolute -top-6 -right-6 backdrop-blur-md rounded-2xl p-4 hidden lg:block"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" style={{
                  boxShadow: "0 0 4px rgba(74, 222, 128, 0.36)",
                }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  Status
                </p>
                <p className="text-sm font-medium" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                  Available
                </p>
              </div>
            </div>
          </motion.div>

          {/* Clients Worldwide Badge - Repositioned Under Portrait */}
          {/* /*<motion.div
            className="absolute -bottom-2 right-5 z-50 hidden sm:block"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          >
            <div className="flex items-center gap-2">
              <Globe 
                className="w-3 h-3" 
                style={{ color: "#7EE7C6" }} 
              />
              <p 
                className="font-semibold whitespace-nowrap" 
                style={{ 
                  color: "#E6EEF8",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                10+ Clients Worldwide
              </p>
            </div>
          </motion.div>* */}

          {/* Floating Projects Badge - Repositioned Below Clients */}
          <motion.div
            className="absolute right-5 backdrop-blur-sm rounded-xl p-3 z-50 hidden sm:block"
            style={{
              top: "calc(100% + 18px)",
              background: "linear-gradient(90deg, #3B2EEB, #6F4BFF)",
              boxShadow: "0 8px 24px rgba(59, 46, 235, 0.4)",
            }}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            }}
          >
            <div className="flex items-center gap-2.5">
              <Rocket className="w-4 h-4 text-white" />
              <p 
                className="font-bold whitespace-nowrap text-white" 
                style={{ 
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                20+ Projects
              </p>
            </div>
          </motion.div>

          {/* Floating Freelance Stats Card - Removed as it's now the main Clients badge */}
        </motion.div>
      </div>

      {/* Separator - Same as Header */}
      <div 
        className="absolute bottom-0 left-0 right-0 mx-12"
        style={{
          height: "1px",
          background: "#E6E9EE",
          opacity: 0.12,
          boxShadow: "0 6px 18px rgba(2, 6, 23, 0.28)",
        }}
      />
    </section>
  );
}