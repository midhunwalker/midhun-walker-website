"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard, type Project } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface ProjectsProps {
  projectImages: {
    project1: string;
    project2: string;
    project3: string;
    project4: string;
    project5: string;
    project6: string;
  };
}

export function Projects({ projectImages }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ["All", "Frontend", "Full-Stack", "UI/UX", "React", "Node"];

  const projects: Project[] = [
    {
      id: "1",
      title: "Analytics Dashboard",
      subtitle: "SaaS Platform",
      description:
        "A comprehensive analytics dashboard for tracking business metrics, user engagement, and revenue analytics with real-time data visualization.",
      image: projectImages.project1,
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Recharts"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: ["Full-Stack", "React", "Node"],
    },
    {
      id: "2",
      title: "Mobile Banking App",
      subtitle: "Fintech",
      description:
        "Secure mobile banking application with instant transfers, bill payments, and investment tracking. Built with focus on security and user experience.",
      image: projectImages.project2,
      tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      category: ["Full-Stack", "React", "Node"],
    },
    {
      id: "3",
      title: "E-Commerce Platform",
      subtitle: "Retail",
      description:
        "Full-featured e-commerce platform with product management, shopping cart, checkout, and order tracking. Optimized for performance and SEO.",
      image: projectImages.project3,
      tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: ["Full-Stack", "Frontend", "React"],
    },
    {
      id: "4",
      title: "Project Management Tool",
      subtitle: "Productivity SaaS",
      description:
        "Collaborative project management tool with task tracking, team collaboration, and real-time updates. Designed for remote teams.",
      image: projectImages.project4,
      tags: ["React", "Node.js", "Socket.io", "Redux"],
      liveUrl: "https://example.com",
      category: ["Full-Stack", "React", "Node"],
    },
    {
      id: "5",
      title: "Health & Fitness Tracker",
      subtitle: "Healthcare",
      description:
        "Personal health tracking application with workout planning, nutrition logging, and progress analytics. Integrates with wearable devices.",
      image: projectImages.project5,
      tags: ["React", "TypeScript", "Chart.js", "Express"],
      repoUrl: "https://github.com",
      category: ["Full-Stack", "React", "Node"],
    },
    {
      id: "6",
      title: "Design System",
      subtitle: "UI/UX Library",
      description:
        "Comprehensive design system with reusable components, design tokens, and documentation. Built for consistency across products.",
      image: projectImages.project6,
      tags: ["React", "Storybook", "Figma", "CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: ["Frontend", "UI/UX", "React"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="px-6 lg:px-12 py-24 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-text-high">Featured Projects</h2>
          <p className="text-text-medium max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development
            and UI design across various industries.
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              variant="outline"
              className="group gap-2 w-full sm:w-auto"
              style={{
                background: "transparent",
                border: "1px solid rgba(230, 233, 238, 0.06)",
                borderRadius: "12px",
                padding: "12px 22px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#E6EEF8",
              }}
              onClick={() => scrollToSection("#experience")}
            >
              <Calendar className="w-4 h-4" />
              View Experience
            </Button>
            <Button
              className="group gap-2 border-0 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #5B3BFF 0%, #7C53FF 100%)",
                borderRadius: "12px",
                padding: "12px 22px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#071026",
                boxShadow: "0 10px 30px rgba(91, 59, 255, 0.18)",
              }}
              onClick={() => scrollToSection("#projects")}
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-surface/50 text-text-medium hover:bg-surface hover:text-text-high"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-0 py-9">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-medium">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}