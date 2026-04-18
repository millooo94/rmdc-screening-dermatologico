"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const PHONE_NUMBER = "0950904525";
const WHATSAPP_NUMBER = "390950904525";

export function FinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-20 md:pb-16"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 h-[110%] -top-[5%]"
        >
          <Image
            src="/images/dermatologist.jpg"
            alt="Centro medico Remedic"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      </div>

      <div className="relative px-5 pt-16">
        <div className="mx-auto max-w-md text-center md:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 text-2xl font-bold text-foreground text-balance md:text-4xl">
              Prenota il tuo screening
            </h2>
            <p className="mb-8 text-muted-foreground md:mx-auto md:max-w-2xl md:text-lg">
              Contattaci subito per maggiori informazioni o per prenotare la tua
              visita
            </p>

            <div className="mb-8 flex flex-col gap-3 md:mx-auto md:max-w-2xl md:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-xl bg-[#25D366] text-base font-semibold text-white shadow-lg hover:bg-[#20BD5A]"
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
                className="h-14 w-full rounded-xl border-2 border-primary text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Chiama ora
                </a>
              </Button>
            </div>

            {/* Brand Footer */}
            <div className="pt-6 border-t border-border">
              <div className="mb-2 flex items-center justify-center">
                <div className="relative h-[52px] w-[min(16.5rem,46vw)] md:h-[84px] md:w-[21rem]">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Remedic"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
