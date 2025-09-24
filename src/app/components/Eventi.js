import styles from "./style/eventi-style.module.css";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Poppins } from "next/font/google";
import SingleButton from "./SingleButton";


const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaLight = Comfortaa({subsets: ["latin"], weight: "400" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsSemiBold = Poppins({ subsets: ["latin"], weight: "600" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Eventi() {
  return (
    <>
        <section id="eventi" className={`${styles.container} ${styles.chiSonoContainer}`}>
            <div className={styles.containerEventi}>
                <div className={styles.counter}>
                    <span className={`${styles.numero} ${poppinsBold.className}`}>400+</span>
                    <span className={`${styles.descriptionNumeroAnni} ${comfortaa.className}`}>Eventi <br /> Realizzati</span>
                </div>

                <div className={styles.counter}>
                    <span className={`${styles.numero} ${poppinsBold.className}`}>7+</span>
                    <span className={`${styles.descriptionNumeroAnni} ${comfortaa.className}`}>Anni di <br /> Esperienza</span>
                </div>
            </div>

            <div className={styles.wrapperContainer}>
                <div className={styles.card}>
                    <span className={`${styles.titleCard} ${poppinsSemiBold.className}`}>Spettacoli <br /> Per Bambini</span>
                    <span className={`${styles.descriptionCard} ${comfortaaLight.className}`}>
                        Adatto ai bambini dai 5 anni in 
su. Spettacolo molto variegato
con carte, animaletti, cubi da cui
escono oggetti, palline di spugna, 
carte giganti e tanto altro.
                    </span>

                    <SingleButton />

                </div>

                <div className={styles.card2}>
                    <span className={`${styles.titleCard} ${poppinsSemiBold.className}`}>Spettacoli <br /> Per Adulti</span>
                    <span className={`${styles.descriptionCard} ${comfortaaLight.className}`}>Adatto per diverse occasioni, tra cui 
                        feste private, matrimoni, feste paesane 
                        ecc... La durata può andare dai 30 minuti 
                        fino a 2 ore, mischiando close-up, 
                        mentalismo, magia comica e tanto altro.
                    </span>

                    <SingleButton />

                </div>

                <div className={styles.card}>
                    <span className={`${styles.titleCard} ${poppinsSemiBold.className}`}>Grandi <br /> Palchi </span>
                    <span className={`${styles.descriptionCard} ${comfortaaLight.className}`}>
                        Adatto a diverse tipologie di
palchi, da quelli del teatro fino
a quelli di piazza, per un pubblico
misto di grandi e piccoli. La durata
è flessibile in base all’evento.
                    </span>

                    <SingleButton />

                </div>

            </div>
        </section>
    </>
  );
}