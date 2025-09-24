import styles from "./style/contattami-style.module.css";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Poppins } from "next/font/google";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import SingleButton from "./SingleButton";
import WhatsappButton from "./ButtonCustomWhatsapp";





const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaLight = Comfortaa({subsets: ["latin"], weight: "400" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsSemiBold = Poppins({ subsets: ["latin"], weight: "600" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Contattami() {
  return (
    <>
        <section id="contattami" className={`${styles.container} ${styles.contattamiContainer}`}>
            <div className={styles.floatingContainer}>
              <div className={styles.leftContent}>
                <div className={`${styles.subtitleFirst} ${poppinsSemiBold.className}`}>
                  FAI IL PRIMO PASSO VERSO L'INCREDIBILE.
                </div>

                <div className={`${styles.title} ${poppinsBold.className}`}>
                  Vuoi portate la magia
                </div>

                <div className={`${styles.title} ${poppinsBold.className}`}>
                  nel tuo evento?
                </div>

                <div className={`${styles.title} ${poppinsBold.className}`}>
                  Scrivimi!
                </div>

                <div className={`${styles.description} ${poppins.className}`}>
                  Scrivimi per trasformare il tuo evento in un’esperienza fuori
                  dall’ordinario. Che si tratti di una serata privata, o un’occasione 
                  speciale, ogni dettaglio sarà curato per lasciare il segno. Il primo 
                  passo? Lascia che l’incanto inizi da qui.
                </div>
              </div>

              <div className={styles.rightContent}>
                  <div className={`${styles.locationContainer} ${poppins.className}`}> <FaLocationDot className={styles.iconContact}/>Sardinia, Italy</div>
                  <div className={`${styles.telefonoContainer} ${poppins.className}`}><FaPhoneAlt className={styles.iconContact}/> +39 38018640390</div>
                  <div className={`${styles.emailContainer} ${poppins.className}`}><IoMail className={styles.iconContact}/> lorenzomameli301@gmail.com</div>
                  <div className={styles.buttonContainer}><WhatsappButton /></div>
              </div>
              
            </div>
        </section>
    </>
  );
}