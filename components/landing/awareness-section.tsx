"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AwarenessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Image Block with Parallax */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] -top-[10%]">
          <Image
            src="/images/skin-care.jpg"
            alt="Prevenzione melanoma"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content Overlay Card */}
      <div className="relative -mt-32 px-5 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl md:max-w-3xl md:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              Maggio 2025
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight text-balance">
            Mese della consapevolezza sul melanoma
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Il melanoma è uno dei tumori della pelle più diffusi, ma se
            individuato in tempo è altamente curabile. Maggio è dedicato alla
            sensibilizzazione: un controllo oggi può fare la differenza domani.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">90%</p>
              <p className="text-xs text-muted-foreground">Tasso di guarigione</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                se diagnosticato precocemente con screening regolari
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
