import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <div>
            <p>© {new Date().getFullYear()} SalonApp Inc.</p>
            <p>
              1234 Beauty Street, Suite 100, YourCity, YourState 12345
            </p>
          </div>
          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
