"use client";

import { useMemo, useState } from "react";
import styles from "./style/chisono-style.module.css";
import VideoSlider from "./VideoSlider";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import CustomButton from "./DoubleButton";

const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({ subsets: ["latin"], weight: "600" });
const comfortaaBold = Comfortaa({ subsets: ["latin"], weight: "700" });

export default function ChiSono() {
  const [expanded, setExpanded] = useState(false);

  const fullText = useMemo(
    () => `Ciao! Sono Lorenzo Mameli, prestigiatore e mago comico. Ho iniziato con lo street magic, sorprendendo le persone per strada, e oggi porto le mie esibizioni in piazze, feste, matrimoni e grandi palchi.

Sono stato finalista del talent televisivo “RIFLETTORI” e ospite speciale in diverse trasmissioni radiofoniche. Ho portato il mio spettacolo anche in prestigiosi resort sardi, come Limone Beach Resort, Is Morus e Alma Resort.

Con il mio stile unico, unisco illusioni spettacolari e comicità, creando momenti indimenticabili che fanno ridere e stupire grandi e piccini.`,
    []
  );

  const MAX_CHARS = 123;
  const isLong = fullText.length > MAX_CHARS;

  const previewText = useMemo(() => {
    if (!isLong) return fullText;
    return fullText.slice(0, MAX_CHARS).trimEnd() + "…";
  }, [fullText, isLong]);

  const shownText = expanded || !isLong ? fullText : previewText;

  return (
    <>
      <section id="chi-sono" className={`${styles.container} ${styles.chiSonoContainer}`}>
        {/* background decorativo (dimensione reale) */}
        <img
          src="/striscia.png"
          alt=""
          aria-hidden="true"
          className={`${styles.bgStriscia} ${styles.hideMobile}`}
        />

        <div className={styles.containerChiSonoLeft}>
          <div className={`${styles.chiSono} ${comfortaa.className}`}>
            Chi sono

            <div className={`${styles.chiSonoDescription} ${comfortaa.className}`}>
              <span className={styles.chiSonoText}>{shownText}</span>

              {isLong && (
                <div className={styles.readMoreWrapper}>
                  <button
                    type="button"
                    className={styles.readMoreBtn}
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                  >
                    {expanded ? "Mostra meno" : "Clicca per saperne di più"}
                  </button>
                </div>
              )}
            </div>
          </div>

          <CustomButton />
        </div>

        <div className={styles.containerChiSonoRight}>
          <VideoSlider />
        </div>
      </section>
    </>
  );
}
