import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { Cinzel_Decorative } from "next/font/google";
import { Comfortaa } from "next/font/google";
import ChiSono from "./components/ChiSono";
import Eventi from "./components/Eventi";
import Contattami from "./components/Contattami";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const cinzelDecorative_light = Cinzel_Decorative({ subsets: ["latin"], weight: "400" });
const comfortaa = Comfortaa({subsets: ["latin"], weight: "600" });
const comfortaaBold = Comfortaa({subsets: ["latin"], weight: "700" });

export default function Home() {
  return (

    <>
    <Navbar />
    <section id="main-page" className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.mainPage}>
          <h1 className={`${styles.megaTitle} ${cinzelDecorative.className}`}>
            LORENZO
            <br />
            MAMELI
          </h1>

          <h2 className={`${styles.subtitle} ${cinzelDecorative_light.className}`}>
            MAGO COMICO
          </h2>

          <div className={`${styles.btnContainer} ${comfortaa.className}`}>
            <a href="#chi-sono" className={styles.btnScopri}>Scopri di più</a>
          </div>
        </div>

        <div className={styles.imageDiv}>
          <img src="/img/LorenzoMamelimago.jpg" alt="Logo"/>
        </div>
      
      </div>
    </section>

    <ChiSono />

    <Eventi />

    <Contattami />

    <Gallery />

    <Footer />

    </>
  );
}