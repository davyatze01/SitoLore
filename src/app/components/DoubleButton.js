import Image from "next/image";
import styles from "./style/button-style.module.css";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });


export default function DoubleButton() {
  return (
    <div className={styles.btnContainer2}>
        <a href="https://wa.me/393801864030?text=Ciao%20vorrei%20più%20informazioni%20per%20lo%20spettacolo

" className={`${styles.btnChiSono} ${comfortaaBold.className}`}>
            <div className={styles.btnDiv1}>
            <FaWhatsapp className={styles.iconWhatsapp} />
            </div>
        </a>

        <a href="tel:+393801864030" className={`${styles.btnChiSono} ${comfortaaBold.className}`}>
            <div className={styles.btnDiv1}>
            <IoIosCall className={styles.iconWhatsapp} />
            </div>
        </a>

        <a href="mailto:lorenzomameli301@gmail.com" className={`${styles.btnChiSono} ${comfortaaBold.className}`}>
            <div className={styles.btnDiv1}>
            <IoIosMail className={styles.iconWhatsapp} />
            </div>
        </a>
    </div>
  );
}
