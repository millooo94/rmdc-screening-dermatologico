"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const PHONE_NUMBER = "0950904525";
const WHATSAPP_NUMBER = "390950904525";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[68svh] overflow-hidden md:min-h-screen"
    >
      {/* Background Image with Parallax - Dermatoscope Examination */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0 origin-center"
        >
          <Image
            src="/images/dermatoscope-exam.jpg"
            alt="Visita dermatologica con dermatoscopio"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[66svh] flex-col justify-end px-5 pb-6 pt-20 md:min-h-screen md:justify-center md:pb-10 md:pt-28">
        <div className="mx-auto w-full max-w-md md:max-w-6xl">
          <div className="md:max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Maggio 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-3 text-3xl font-bold leading-tight text-foreground text-balance md:text-5xl"
            >
              La prevenzione parte da un controllo
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-base text-muted-foreground md:text-lg"
            >
              Prenditi cura della tua pelle con uno screening dermatologico
              mirato, con{" "}
              <strong className="text-foreground">mappatura dei nei</strong>
            </motion.p>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 rounded-2xl border border-border bg-card/95 p-5 shadow-xl backdrop-blur-sm md:p-6"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Screening dermatologico{" "}
                <span className="whitespace-nowrap">+ mappatura dei nei</span>
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">60</span>
                <span className="text-xl font-semibold text-primary">€</span>
                <span className="text-sm text-muted-foreground ml-2">
                  solo a maggio
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-3 md:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-xl bg-[#25D366] text-base font-semibold text-white shadow-lg hover:bg-[#20BD5A] md:w-auto md:flex-1"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ciao, vorrei prenotare uno screening dermatologico.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Scrivici su WhatsApp
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-xl border-2 border-primary bg-card/80 text-base font-semibold text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground md:w-auto md:flex-1"
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Chiama ora
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
