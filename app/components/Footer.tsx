"use client";

import { motion } from "motion/react";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/midhunwalker", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/midhunwalker/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/MidhunWalker", label: "Twitter" },
    { icon: Mail, href: "mailto:midhunwalker.dev@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="relative"
      style={{
        background: "rgba(12, 20, 36, 0.52)",
        boxShadow: "0 -12px 40px rgba(2, 6, 23, 0.55)",
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-6 lg:px-[60px]"
        style={{
          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        {/* Top Row - 3 Columns */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[160px] mb-12"
          style={{ marginBottom: "48px" }}
        >
          {/* Brand / Description Column */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 
              style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#F0F6FF",
              display: "flex",
              alignItems: "center",
              }}
            >
              Midhun Walker
              <p style={{ color: "#6B7280", fontSize: "14px", fontWeight: 400, marginLeft: "8px" }}>(alias)</p>
            </h3>
            <p 
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#A5B4C7",
                lineHeight: 1.55,
                maxWidth: "240px",
              }}
            >
              Full-Stack Developer & UI Designer crafting beautiful, functional web
              experiences.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#D7E1EC",
                letterSpacing: "0.3px",
              }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left w-fit transition-all"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#94A3B8",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  whileHover={{
                    color: "#FFFFFF",
                    x: 4,
                    transition: { duration: 0.18 },
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Social Connect Column */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#D7E1EC",
              }}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    aria-label={social.label}
                  >
                    <Icon 
                      className="w-5 h-5"
                      style={{
                        color: "#AAB8D2",
                        filter: "drop-shadow(0 0 14px rgba(124, 83, 255, 0.25))",
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div 
          style={{
            height: "1px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.06)",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ paddingTop: "10px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
            <p 
            className="flex items-center justify-center gap-2 w-full"
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(200, 210, 225, 0.55)",
            }}
            >
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-danger fill-danger" /> and lots of coffee.
            </p>
           
        </motion.div>
      </div>
    </footer>
  );
}
