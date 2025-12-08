"use client";

import { X, ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card-bg border-white/10 p-0">
        {/* Visually hidden title and description for accessibility */}
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {project.description}
        </DialogDescription>
        
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-text-high hover:bg-surface transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="text-text-high">{project.title}</h2>
              <p className="text-lg text-text-medium">{project.subtitle}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted">Timeline</p>
                  <p className="text-sm text-text-high">3 months</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface/50">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted">Role</p>
                  <p className="text-sm text-text-high">Full-Stack Dev</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface/50">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xs text-muted">Type</p>
                  <p className="text-sm text-text-high">Web App</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-text-high">Project Overview</h3>
              <p className="text-text-medium leading-relaxed">
                {project.description}
              </p>
              <p className="text-text-medium leading-relaxed">
                This project involved designing and developing a full-featured web application
                from the ground up. Key challenges included optimizing performance for large
                datasets, implementing real-time features, and ensuring accessibility across
                all user touchpoints.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-text-high">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-text-medium">
                    Responsive design optimized for all devices
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-text-medium">
                    Real-time data synchronization and updates
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-text-medium">
                    Advanced authentication and authorization
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-text-medium">
                    Comprehensive analytics dashboard
                  </p>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-text-high">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-surface/50 text-text-medium text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <Button
                  asChild
                  className="bg-primary hover:bg-primary-variant text-white gap-2"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-muted/30 text-text-high hover:bg-muted/10 gap-2"
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}