import Image from "next/image";
import styles from "./style/btnsingle-style.module.css";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });


export default function SingleButton() {
  return (
        <div className={styles.btnContainer2}>
            <a href="#" className={`${styles.btnChiSono} ${comfortaaBold.className}`}>
                <div className={styles.btnDiv1}>
                <span>Contattami</span>
                </div>
                <div className={styles.btnDiv2}>
                <FaArrowCircleRight />
                </div>
            </a>
        </div>
  );
}
