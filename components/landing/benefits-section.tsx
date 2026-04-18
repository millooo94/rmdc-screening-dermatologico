"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Shield, Eye, Stethoscope, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Prevenzione",
    description: "Individua i segni precoci per proteggerti",
  },
  {
    icon: Eye,
    title: "Attenzione ai cambiamenti",
    description: "Monitora l'evoluzione dei nei nel tempo",
  },
  {
    icon: Stethoscope,
    title: "Controllo specialistico",
    description: "Dermatologi esperti con dermatoscopio digitale",
  },
  {
    icon: Clock,
    title: "Rapidità e semplicità",
    description: "Visita veloce, indolore e non invasiva",
  },
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[110%] -top-[5%]">
          <Image
            src="/images/skin-care.jpg"
            alt="Cura della pelle"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="px-5 py-16">
        <div className="mx-auto max-w-md md:max-w-6xl">
          <div className="md:mx-auto md:max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl"
          >
            Perché controllare i tuoi nei?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 text-center text-muted-foreground md:text-lg"
          >
            Una visita oggi può fare la differenza domani
          </motion.p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground md:text-base">{benefit.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
