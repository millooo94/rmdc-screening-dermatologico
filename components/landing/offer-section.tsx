"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { useRef } from "react";

const features = [
  "Visita dermatologica completa",
  "Mappatura digitale dei nei inclusa nel prezzo",
  "Analisi con dermatoscopio",
  "Referto immediato",
];

export function OfferSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Full-width Image with Parallax */}
      <div className="relative h-[45vh] md:h-[50vh]">
        <motion.div 
          style={{ y: imageY, scale: imageScale }} 
          className="absolute inset-0 h-[130%] -top-[15%]"
        >
          <Image
            src="/images/mole-mapping.jpg"
            alt="Mappatura dei nei con dermatoscopio"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        
        {/* Floating Price Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Solo</p>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-primary">60</span>
            <span className="text-lg font-semibold text-primary">€</span>
          </div>
        </motion.div>
      </div>

      {/* Content Card Overlapping Image */}
      <div className="relative -mt-24 px-5 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md rounded-2xl bg-primary p-6 text-white shadow-xl md:max-w-3xl md:p-8"
        >
          <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wide mb-2">
            Offerta Maggio 2025
          </p>
          <h2 className="mb-5 text-xl font-bold leading-tight text-balance md:text-2xl">
            Screening dermatologico con mappatura digitale dei nei inclusa
          </h2>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={feature} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-primary-foreground/90">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
