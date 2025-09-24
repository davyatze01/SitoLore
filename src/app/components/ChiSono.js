import styles from "./style/chisono-style.module.css";
import VideoSlider from "./VideoSlider";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import CustomButton from "./DoubleButton";


const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });

export default function ChiSono() {
  return (
    <>
        <section id="chi-sono" className={`${styles.container} ${styles.chiSonoContainer}`}>
      
            <div className={styles.containerChiSonoLeft}>
                <div className={`${styles.chiSono} ${comfortaa.className}`}>
                Chi sono

                <div className={`${styles.chiSonoDescription} ${comfortaa.className}`}>
                    {/* Lorenzo Mameli, ha 24 anni ed è un prestigiatore brillante.<br />
                    Ha iniziato il suo percorso con lo street magic cioè l'arte di fare magia con i passanti 
                    per strada. Col passare degli anni si è specializzato nell'esibirsi nelle piazze con grandi 
                    e piccoli, feste di compleanno matrimoni e grandi palchi, arrivando con la sua magia 
                    comica in programmi televisivi, tra cui il talent "RIFLETTORI" come finalista. Partecipando 
                    come ospite speciale nelle interviste radiofoniche, portando il suo spettacolo anche in 
                    alcuni resort molto importanti nel panorama sardo tra cui: Limone Beach Resort, Is Morus, 
                    Alma Resort ecc... le sue esibizioni ricche di illusioni spettacolari, hanno affascinato non 
                    solo gli spettatori, ma anche gli influencer e cantanti famosi. */}
                    Ciao! Sono Lorenzo Mameli, prestigiatore e mago comico. Ho iniziato con lo street magic, sorprendendo le persone per strada, e oggi porto le mie esibizioni in piazze, feste, matrimoni e grandi palchi.

        Sono stato finalista del talent televisivo “RIFLETTORI” e ospite speciale in diverse trasmissioni radiofoniche. Ho portato il mio spettacolo anche in prestigiosi resort sardi, come Limone Beach Resort, Is Morus e Alma Resort.

        Con il mio stile unico, unisco illusioni spettacolari e comicità, creando momenti indimenticabili che fanno ridere e stupire grandi e piccini.
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
