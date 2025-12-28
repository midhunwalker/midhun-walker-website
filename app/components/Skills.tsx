"use client";

import { motion } from "motion/react";
import { useMotionConfig } from "@/lib/useMotionConfig";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Wrench,
  Smartphone,
  Layers,
  Zap,
  Box,
  Folder,
  GitBranch,
  Server,
  Layout,
  Figma as FigmaIcon,
  Container,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  skills: Skill[];
}

// Tech icons mapping
const techIcons: Record<string, any> = {
  "React": Layers,
  "Next.js": Zap,
  "TypeScript": Code2,
  "Node.js": Server,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "Docker": Container,
  "AWS": Cloud,
  "Figma": FigmaIcon,
  "Tailwind": Layout,
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Database,
    color: "accent",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL / MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: Palette,
    color: "primary",
    skills: [
      { name: "Figma", level: 95 },
      { name: "FigJam", level: 80 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
  },
  // {
  //   id: "cloud",
  //   title: "Cloud & DevOps",
  //   icon: Cloud,
  //   color: "primary",
  //   skills: [
  //     { name: "AWS / Azure", level: 75 },
  //     { name: "Docker", level: 80 },
  //     { name: "CI/CD", level: 75 },
  //     { name: "Git", level: 90 },
  //   ],
  // },
  // {
  //   id: "mobile",
  //   title: "Mobile Development",
  //   icon: Smartphone,
  //   color: "accent",
  //   skills: [
  //     { name: "React Native", level: 80 },
  //     { name: "Responsive Design", level: 95 },
  //     { name: "Progressive Web Apps", level: 85 },
  //   ],
  // },
  // {
  //   id: "tools",
  //   title: "Tools & Others",
  //   icon: Wrench,
  //   color: "success",
  //   skills: [
  //     { name: "VS Code", level: 95 },
  //     { name: "Postman", level: 85 },
  //     { name: "Jira / Notion", level: 90 },
  //     { name: "Agile / Scrum", level: 85 },
  //   ],
  // },
];

const getColorClass = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; bar: string }> = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      bar: "bg-primary",
    },
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
      bar: "bg-accent",
    },
    success: {
      bg: "bg-success/10",
      text: "text-success",
      bar: "bg-success",
    },
  };
  return colorMap[color] || colorMap.primary;
};

export function Skills() {
  const { shouldReduceMotion } = useMotionConfig();

  return (
    <section id="skills" className="px-6 lg:px-12 py-24 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          <h2 className="text-text-high">Skills & Expertise</h2>
          <p className="text-text-medium max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across different domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = getColorClass(category.color);

            return (
              <motion.div
                key={category.id}
                className="glass-effect rounded-2xl p-6 space-y-6 hover:border-primary/30 transition-all"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: shouldReduceMotion ? 0 : categoryIndex * 0.05,
                  duration: shouldReduceMotion ? 0 : 0.3,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-text-high">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                      whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : categoryIndex * 0.05 + skillIndex * 0.02,
                        duration: shouldReduceMotion ? 0 : 0.3,
                      }}
                    >
                      {/* Skill Name and Years */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-high">
                          {skill.name}
                        </span>
                        {/* <span className="text-xs text-muted">
                          {skill.years} {skill.years === 1 ? "yr" : "yrs"}
                        </span> */}
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-surface rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${colors.bar} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={shouldReduceMotion ? { width: `${skill.level}%` } : { width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.8,
                            delay: shouldReduceMotion ? 0 : categoryIndex * 0.05 + skillIndex * 0.02,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Logos */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(11, 18, 32, 0.50)",
            border: "1px solid rgba(230, 233, 238, 0.05)",
            padding: "36px 40px",
            boxShadow: "0 12px 28px rgba(2, 6, 23, 0.55), inset 0 -3px 12px rgba(255, 255, 255, 0.02)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-center mb-6"
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "#C8D3E0",
              letterSpacing: "0.2px",
            }}
          >
            Technologies I Work With
          </h3>
          <div 
            className="flex flex-wrap justify-center items-center"
            style={{
              gap: "16px",
              padding: "6px",
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "AWS",
              "Figma",
              "Tailwind",
            ].map((tech, index) => {
              const Icon = techIcons[tech] || Code2;
              
              return (
                <motion.div
                  key={tech}
                  className="flex items-center gap-2 rounded-xl cursor-default transition-all"
                  style={{
                    background: "rgba(91, 59, 255, 0.08)",
                    padding: "8px 14px",
                    boxShadow: "0 4px 14px rgba(2, 6, 23, 0.45)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    boxShadow: "0 12px 26px rgba(2, 6, 23, 0.55)",
                    background: "rgba(91, 59, 255, 0.14)",
                  }}
                >
                  <Icon 
                    className="transition-colors"
                    style={{
                      width: "18px",
                      height: "18px",
                      color: "#7C53FF",
                    }}
                  />
                  <span 
                    className="transition-colors"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#E6EEF8",
                    }}
                  >
                    {tech}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}