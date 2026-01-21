"use client";

import { useEffect, useState } from "react";
import styles from "./style/navbar-style.module.css";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "900",
});

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("main-page");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // percentuale visibile della sezione
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navTitle} ${cinzelDecorative.className}`}>
        <a href="#main-page">Lorenzo Mameli</a>
      </div>

      <div className={styles.menu}>
        <a
          href="#chi-sono"
          className={`${styles.menuItem} ${
            activeSection === "chi-sono" ? styles.active : ""
          }`}
        >
          Chi Sono
        </a>

        <a
          href="#eventi"
          className={`${styles.menuItem} ${
            activeSection === "eventi" ? styles.active : ""
          }`}
        >
          Eventi
        </a>

        <a
          href="#contattami"
          className={`${styles.menuItem} ${
            activeSection === "contattami" ? styles.active : ""
          }`}
        >
          Contattami
        </a>

        <a
          href="#gallery"
          className={`${styles.menuItem} ${
            activeSection === "gallery" ? styles.active : ""
          }`}
        >
          Galleria
        </a>
      </div>
    </nav>
  );
}
