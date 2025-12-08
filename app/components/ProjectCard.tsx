"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.article
      className="group cursor-pointer rounded-2xl overflow-hidden transition-all"
      role="article"
      aria-labelledby={`project-title-${project.id}`}
      style={{
        background: "rgba(7, 18, 38, 0.52)",
        border: "1px solid rgba(230, 233, 238, 0.06)",
        boxShadow: "0 14px 40px rgba(2, 6, 23, 0.45)",
        minWidth: "300px",
        maxWidth: "420px",
      }}
      whileHover={{ 
        y: -6,
        scale: 1.01,
        boxShadow: "0 26px 60px rgba(2, 6, 23, 0.6)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      whileFocus={{
        outline: "3px solid #7C53FF",
        outlineOffset: "3px",
      }}
    >
      {/* Image Hero - 16:10 Aspect Ratio */}
      <div className="relative overflow-hidden bg-surface" style={{ aspectRatio: "16/10" }}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 54%, rgba(7, 18, 38, 0.36) 100%)",
          }}
        />

        {/* Hover Overlay with CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071226] via-[#071226]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="space-y-3">
            <h4 
              className="text-white" 
              style={{ fontSize: "16px", fontWeight: 700 }}
            >
              {project.title}
            </h4>
            
            {/* Tags in Hover */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg"
                  style={{
                    background: "rgba(91, 59, 255, 0.08)",
                    color: "#5B7BFF",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "6px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Filled CTA Button on Hover */}
            <motion.button
              className="flex items-center gap-2 rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg, #5B3BFF 0%, #7C53FF 100%)",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 16px",
                width: "fit-content",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 space-y-3.5">
        {/* Title and Subtitle */}
        <div>
          <h3 
            id={`project-title-${project.id}`}
            className="group-hover:text-primary transition-colors"
            style={{
              color: "#E6EEF8",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </h3>
          <p 
            className="mt-1"
            style={{
              color: "#94A3B8",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description - 3 lines max */}
        <p 
          className="line-clamp-3"
          style={{
            color: "#B8C7D8",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-lg"
              style={{
                background: "rgba(91, 59, 255, 0.08)",
                color: "#5B7BFF",
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 10px",
                borderRadius: "10px",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span
              className="rounded-lg"
              style={{
                background: "rgba(148, 163, 184, 0.08)",
                color: "#94A3B8",
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 10px",
                borderRadius: "10px",
              }}
            >
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Ghost CTA */}
        <div 
          className="flex items-center gap-2 group-hover:gap-3 transition-all pt-1"
          style={{
            color: "#5B7BFF",
            fontSize: "14px",
            fontWeight: 600,
            padding: "8px 10px 8px 0",
          }}
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.article>
  );
}