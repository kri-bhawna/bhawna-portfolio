"use client";

import { educationData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          label="// education"
          title="Academic Foundation"
          description="Chemical engineering at IIT Kharagpur, with the rank and grades to show for it."
        />

        <div className="space-y-5">
          {educationData.map((item) => (
            <ScrollReveal key={item.degree}>
              <div className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/20 transition-colors duration-300 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-sm text-muted whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-medium">
                    {item.institution}
                  </p>
                  {item.detail && (
                    <p className="text-muted text-sm mt-1">{item.detail}</p>
                  )}
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="font-mono text-sm md:text-base font-semibold gradient-text">
                    {item.score}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
