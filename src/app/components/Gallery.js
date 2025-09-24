import styles from "./style/gallery-style.module.css";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Poppins } from "next/font/google";
import GalleryPage from "./GalleryPage";


const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaLight = Comfortaa({subsets: ["latin"], weight: "400" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsSemiBold = Poppins({ subsets: ["latin"], weight: "600" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Eventi() {
  return (
    <>
        <section id="gallery" className={`${styles.container} ${styles.gallery}`}>
                <div className={styles.titleContainer}>
                    <span className={`${styles.title} ${poppinsBold.className}`}>Momenti Magici...</span>
                    <span className={`${styles.subtitle} ${poppins.className}`}>Un viaggio visivo nel mistero e nell'incanto, tra performance e magie uniche.</span>
                </div>


                <div className={styles.galleryContainer}>
                    <GalleryPage />
                </div>
        </section>
    </>
  );
}