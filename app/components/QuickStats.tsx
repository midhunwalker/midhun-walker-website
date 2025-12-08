"use client";

import { motion } from "motion/react";
import { Calendar, Briefcase, Layers } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    label: "Experience",
    value: "7+ Months",
  },
  {
    icon: Briefcase,
    label: "Projects",
    value: "20+",
  },
  {
    icon: Layers,
    label: "Focus Areas",
    value: "UI/UX , Full-Stack, Mobile",
  },
];

export function QuickStats() {
  return (
    <section className="px-6 lg:px-12 pt-24 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="rounded-2xl transition-all group"
                style={{
                  background: "rgba(11, 18, 32, 0.6)",
                  border: "1px solid rgba(230, 233, 238, 0.06)",
                  padding: "22px 28px",
                  boxShadow: "0 10px 30px rgba(2, 6, 23, 0.45), inset 0 -2px 8px rgba(255, 255, 255, 0.02)",
                  minWidth: "260px",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-5">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    style={{
                      background: "rgba(37, 99, 235, 0.1)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p 
                      className="text-sm"
                      style={{
                        color: "#94A3B8",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </p>
                    <p 
                      className="mt-1"
                      style={{
                        color: "#E6EEF8",
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}