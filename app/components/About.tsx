"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Download,
  Heart,
  Lightbulb,
  Target,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

type Value = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Working with this developer was an absolute pleasure. They delivered a beautiful, functional product that exceeded our expectations. Their attention to detail and user experience is outstanding.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content:
      "Not only did they build our entire platform from scratch, but they also helped us refine our product vision. A true full-stack developer who understands both code and design.",
    avatar: "👨‍💻",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead at Creative Agency",
    content:
      "Rare to find a developer who can also design. They brought our Figma designs to life pixel-perfectly while adding thoughtful improvements to the user experience.",
    avatar: "👩‍🎨",
  },
];

const values: Value[] = [
  {
    icon: Users,
    title: "User-Centric",
    description: "Every decision starts with the user. I build products that people love to use.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly learning and adopting new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Quality First",
    description: "Clean code, thorough testing, and attention to detail in every project.",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "I genuinely love what I do, and it shows in the quality of my work.",
  },
];

// Toggle this to true to enable the testimonials carousel
const SHOW_TESTIMONIALS = false;

export function About(): JSX.Element {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-12 relative"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col items-center"
        style={{ gap: "36px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-text-high"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#E6EEF8",
              letterSpacing: "0.2px",
            }}
          >
            About Me
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#A5B4C7",
              lineHeight: 1.55,
            }}
          >
            Get to know more about my approach, values, and what drives me.
          </p>
        </motion.div>

        {/* Bio Section - Enhanced Card */}
        <motion.div
          className="w-full max-w-[800px] rounded-2xl overflow-hidden"
          style={{
            background: "rgba(12, 20, 36, 0.52)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 20px 40px rgba(2, 6, 23, 0.55)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex">
            {/* Accent Bar */}
            <div
              className="flex-shrink-0"
              style={{
                width: "4px",
                background: "#5B3BFF",
                boxShadow: "0 0 18px rgba(91, 59, 255, 0.45)",
                borderRadius: "2px",
              }}
            />

            {/* Content */}
            <div
              className="flex-1 flex flex-col px-[60px] py-[48px] lg:px-[60px] lg:py-[48px] md:px-[40px] md:py-[40px] sm:px-[22px] sm:py-[22px]"
              style={{
                gap: "24px",
              }}
            >
              <div
                className="flex flex-col space-y-4"
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#D7E1EC",
                  lineHeight: 1.7,
                }}
              >
                <p>
                  I'm a full-stack developer and UI designer with over 6 years of
                  experience building web applications that users love. My unique blend
                  of technical expertise and design thinking allows me to create products
                  that are not only functional but also beautiful and intuitive.
                </p>
                <p>
                  My journey started with a fascination for how things work on the web.
                  Over the years, I've honed my skills across the entire stack - from
                  crafting pixel-perfect interfaces in Figma to architecting scalable
                  backend systems. I believe great products are born at the intersection
                  of technology and design.
                </p>
                <p>
                  When I'm not coding or designing, you'll find me exploring new
                  technologies, contributing to open-source projects, or mentoring
                  aspiring developers. I'm passionate about building products that make
                  a real difference in people's lives.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap sm:flex-col gap-4 pt-4">
                <motion.button
                  className="flex items-center justify-center gap-2 rounded-lg transition-all sm:w-full"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5 0%, #7C53FF 100%)",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "12px 22px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 12px 26px rgba(2, 6, 23, 0.4)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Full CV
                </motion.button>

                <motion.button
                  className="flex items-center justify-center gap-2 rounded-lg transition-all sm:w-full"
                  style={{
                    background: "transparent",
                    color: "#C9D4E1",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "12px 22px",
                    borderRadius: "10px",
                    border: "1px solid rgba(201, 212, 225, 0.20)",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 12px 26px rgba(2, 6, 23, 0.4)",
                  }}
                >
                  View Detailed Resume
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: "#A5B4C7" }} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="glass-effect rounded-2xl p-6 space-y-4 hover:border-primary/30 transition-all text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-text-high">{value.title}</h3>
                <p className="text-sm text-text-medium">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials Carousel (controlled by SHOW_TESTIMONIALS)
        {SHOW_TESTIMONIALS && (
          <motion.div
            className="max-w-4xl mx-auto space-y-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          > */}
            {/* <h3 className="text-text-high text-center">What People Say</h3>

            <div className="relative">
              <Card className="glass-effect border-white/10 p-8 lg:p-12">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                > */}
                  {/* <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="text-text-high">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-sm text-muted">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-medium text-lg leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                </motion.div>
              </Card> */}

              {/* Navigation Buttons */}
              {/* <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-surface hover:bg-primary transition-colors flex items-center justify-center text-text-high"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button> */}

                {/* <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentTestimonial
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted/30 hover:bg-muted"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div> */}

                {/* <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-surface hover:bg-primary transition-colors flex items-center justify-center text-text-high"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )} */}
      </div>
    </section>
  );
}

export default About;
