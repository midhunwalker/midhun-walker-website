"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle2,
  MapPin,
  Instagram,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", budget: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:midhunwalker.dev@gmail.com",
      display: "midhunwalker.dev@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/midhunwalker",
      display: "@midhunwalker",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/midhunwalker/",
      display: "/in/midhunwalker",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/MidhunWalker",
      display: "@midhunwalker",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/midhun_walker/",
      display: "@midhunwalker",
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 lg:px-12 relative"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-col items-center"
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
              fontSize: "32px",
              fontWeight: 700,
              color: "#E6EEF8",
              letterSpacing: "0.3px",
            }}
          >
            Get In Touch
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
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="w-full grid lg:grid-cols-5 gap-8">
          {/* Left column wrapper: contains the contact card (form) and the Availability card below it */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Contact Form Card */}
            <motion.div
              className="rounded-2xl overflow-hidden w-full"
              style={{
                background: "rgba(12, 20, 36, 0.52)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 20px 40px rgba(2, 6, 23, 0.55)",
                padding: "40px 45px",
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "26px" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#E6EEF8",
                        }}
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(230, 233, 238, 0.10)",
                          borderRadius: "12px",
                          padding: "14px 16px",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#D7E1EC",
                        }}
                        className="placeholder:text-[#8C9AAF] placeholder:opacity-60"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#E6EEF8",
                        }}
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(230, 233, 238, 0.10)",
                          borderRadius: "12px",
                          padding: "14px 16px",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#D7E1EC",
                        }}
                        className="placeholder:text-[#8C9AAF] placeholder:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="budget"
                      className="text-sm"
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#E6EEF8",
                      }}
                    >
                      Budget (Optional)
                    </label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., ₹1,000 - ₹10,000"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(230, 233, 238, 0.10)",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#D7E1EC",
                      }}
                      className="placeholder:text-[#8C9AAF] placeholder:opacity-60"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm"
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#E6EEF8",
                      }}
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(230, 233, 238, 0.10)",
                        borderRadius: "12px",
                        padding: "16px 18px",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#D7E1EC",
                        lineHeight: 1.6,
                        minHeight: "140px",
                      }}
                      className="resize-none placeholder:text-[#8C9AAF] placeholder:opacity-60"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 transition-all"
                    style={{
                      background: "linear-gradient(135deg, #4F46E5 0%, #7C53FF 100%)",
                      color: "#FFFFFF",
                      fontSize: "15px",
                      fontWeight: 600,
                      padding: "14px 20px",
                      borderRadius: "12px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 14px 28px rgba(2, 6, 23, 0.55)",
                    }}
                  >
                    <Send className="w-[15px] h-[15px]" />
                    Send Message
                  </motion.button>

                  <p
                    className="text-center"
                    style={{
                      fontSize: "12px",
                      color: "#8C9AAF",
                    }}
                  >
                    I typically respond within 24 hours. Your information is kept private
                    and secure.
                  </p>
                </form>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-text-high">Message Sent!</h3>
                  <p className="text-text-medium text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Availability - converted to motion.div so motion props take effect */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(12, 20, 36, 0.52)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 16px 36px rgba(2, 6, 23, 0.55)",
                padding: "26px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: 0.08, duration: 0.48, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#E6EEF8",
                  }}
                >
                  Available for Work
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#A5B4C7",
                }}
              >
                Currently accepting new projects for Q4 2025. Let's discuss how I can
                help bring your vision to life.
              </p>
            </motion.div>
          </div>

          {/* Contact Info & Social Links (right column) */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Location */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(12, 20, 36, 0.52)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 16px 36px rgba(2, 6, 23, 0.55)",
                padding: "26px 28px",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin
                    className="w-5 h-5"
                    style={{
                      color: "#7C53FF",
                      filter: "drop-shadow(0 0 12px rgba(124, 83, 255, 0.45))",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#E6EEF8",
                    }}
                  >
                    Location
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#A5B4C7",
                    }}
                  >
                    Palakkad, Kerala, India
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#A5B4C7",
                    }}
                  >
                    Open to remote work
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(12, 20, 36, 0.52)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 16px 36px rgba(2, 6, 23, 0.55)",
                padding: "26px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#E6EEF8",
                }}
              >
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-surface/30 hover:bg-surface transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon
                          className="w-5 h-5"
                          style={{
                            color: "#7C53FF",
                            filter: "drop-shadow(0 0 12px rgba(124, 83, 255, 0.45))",
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm"
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#E6EEF8",
                          }}
                        >
                          {link.name}
                        </p>
                        <p
                          className="truncate"
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#A5B4C7",
                          }}
                        >
                          {link.display}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
