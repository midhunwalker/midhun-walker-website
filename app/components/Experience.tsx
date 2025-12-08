"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
  id: "1",
  company: "TATA – Jyothi Integrated Industrial Incubation Center, Shornur",
  role: "Python Developer Intern",
  period: "May 2023 (One Month)",
  description:
    "Assisted in developing backend features and gained hands-on experience in Python, Django, and API development.",
  achievements: [
    "Contributed to building and testing basic backend modules under guidance",
    "Improved API performance by identifying and fixing minor bottlenecks",
    "Worked on converting smaller modules into structured Django apps",
    "Collaborated with the development team and learned industry-standard workflows"
  ],
  technologies: ["Python", "Django", "REST APIs", "PostgreSQL", "Git"]
},
  {
    id: "2",
    company: "Star Innovation, Thrissur",
    role: "Django Developer Intern",
    period: "2024 April (One Months)",
    description:
      "Designed and developed full-stack web applications for client projects using Django, PHP, and modern frontend technologies. Focused on secure, scalable, and high-performance solutions.",
    achievements: [
      "Developed and deployed a complete food-delivery application for a major client",
      "Created responsive, mobile-first interfaces using Bootstrap and custom CSS",
      "Optimized SQL queries and backend logic, improving application performance significantly",
      "Collaborated with cross-functional teams to refine requirements and deliver features on schedule",
      "Integrated REST APIs, authentication modules, and data-driven functionality",
    ],
    technologies: [
      "Django",
      "Python",
      "Bootstrap",
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "jQuery",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: "3",
    company: "Ziya Academy, Aluva",
    role: "MERN Stack Developer Intern",
    period: "May 2025 - Sep 2025",
    description: "Built and maintained e-commerce platforms for retail clients.",
    achievements: [
      "Implemented responsive designs improving mobile conversion by 35%",
      "Built a reusable component library used across 10+ projects",
      "Optimized bundle size reducing load time by 50%",
      "Collaborated with design team on accessibility improvements",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux", "MongoDB", "Node.js"],
  },
];

export function Experience(): JSX.Element {
  // Safe initial value - no item expanded by default
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="px-6 lg:px-12 relative"
      style={{ paddingTop: "80px", paddingBottom: "60px" }}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="experience-heading"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#E6EEF8",
            }}
          >
            Experience
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#A5B4C7",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            My professional journey building products that users love.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: "rgba(12, 20, 36, 0.56)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 12px 32px rgba(2, 6, 23, 0.55)",
              }}
              className="hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Section: Role, Company, Period */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(91, 59, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Building2 style={{ width: "28px", height: "28px", color: "#7C53FF" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#F0F6FF",
                      marginBottom: "4px",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#A5B4C7",
                      marginBottom: "8px",
                    }}
                  >
                    {exp.company}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "#7D8A9D",
                    }}
                  >
                    <Calendar style={{ width: "16px", height: "16px" }} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#C9D4E1",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {exp.description}
              </p>

              {/* Achievements */}
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    color: "#A5B4C7",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Key Achievements
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}>
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={`${exp.id}-ach-${i}`}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "rgba(34, 197, 94, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#22C55E",
                          }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#D5DEE8",
                          lineHeight: "1.5",
                          margin: 0,
                        }}
                      >
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    color: "#A5B4C7",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Technologies Used
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  {exp.technologies && exp.technologies.length > 0 ? (
                    exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={`${exp.id}-tech-${idx}-${tech}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        style={{
                          background: "rgba(91, 59, 255, 0.1)",
                          color: "#7C53FF",
                          fontSize: "12px",
                          fontWeight: 600,
                          padding: "6px 12px",
                          borderRadius: "8px",
                          border: "1px solid rgba(124, 83, 255, 0.2)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))
                  ) : (
                    <p style={{ color: "#A5B4C7", fontSize: "12px" }}>
                      No technologies specified
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
