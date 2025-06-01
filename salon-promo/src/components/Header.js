// src/components/Header.js
import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>Snap to Snip. Book Your Look.</div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#values">Our Values</a>
            </li>
            <li>
              <a href="#cta">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
