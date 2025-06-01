// src/components/CTA.js
import React from "react";
import styles from "../styles/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta} id="cta">
      {/* Background “blob” for extra flair */}
      <div className={styles.blob} />

      <div className="container">
        <div className={styles.box}>
          <h2 className={styles.title}>Ready to Get Gorgeous?</h2>
          <p className={styles.subtitle}>
            Download App now and book your first appointment in under 60
            seconds. No hidden fees, 100% satisfaction guaranteed.
          </p>
          <div className={styles.buttons}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
