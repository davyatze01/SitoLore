import Image from "next/image";
import styles from "./style/navbar-style.module.css";
import { Cinzel_Decorative } from "next/font/google";


const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"] , weight: "900"});


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={`${styles.navTitle} ${cinzelDecorative.className}`}>
          Lorenzo Mameli
        </div>

        <div className={styles.menu}>
          <a href="#chi-sono" className={styles.menuItem}>Chi Sono</a>
          <a href="#eventi" className={styles.menuItem}>Eventi</a>
          <a href="#contattami" className={styles.menuItem}>Contattami</a>
          <a href="#gallery" className={styles.menuItem}>Galleria</a>
        </div>
      
    </nav>
  );
}
