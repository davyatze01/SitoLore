import styles from "./style/footer.module.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"], weight: "600" });

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${comfortaa.className}`}>
      <div className={styles.container}>
        <span>© {new Date().getFullYear()} The Grid Project</span>
      </div>
    </footer>
  );
}
