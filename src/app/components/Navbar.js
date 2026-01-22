"use client";

import { useEffect, useState } from "react";
import styles from "./style/navbar-style.module.css";
import { Cinzel_Decorative } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiMenu, FiX } from "react-icons/fi";


const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "900",
});

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("main-page");
  const [open, setOpen] = useState(false);

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
    <>
    <nav className={`${styles.navbar} ${styles.hideMobile}`}>
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

    {/* Hamburger */}
    <button
      className={`${styles.hamburger} ${styles.showMobile}`}
      onClick={() => setOpen(!open)}
      aria-label="Apri menu"
    >
      {open ? <FiX size={28} /> : <FiMenu size={28} />}
    </button>

    {/* Menu */}
    <nav
      className={`${styles.mobileMenu} ${styles.showMobile} ${open ? styles.open : ""}`}
    >
      <ul>
        <li><a href="#main-page" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#chi-sono" onClick={() => setOpen(false)}>Chi Sono</a></li>
        <li><a href="#eventi" onClick={() => setOpen(false)}>Eventi</a></li>
        <li><a href="#contattami" onClick={() => setOpen(false)}>Contattami</a></li>
        <li><a href="#gallery" onClick={() => setOpen(false)}>Galleria</a></li>
      </ul>
    </nav>

    </>
  );
}
