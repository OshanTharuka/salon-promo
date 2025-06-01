// src/components/Hero.js
import React from "react";
import styles from "../styles/Hero.module.css";


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobOne} />
      <div className={styles.blobTwo} />

      <div className={`container ${styles.inner}`}>
        {/* Text Column */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Your Next Salon Appointment<br className="break" />
            Is Just a Tap Away
          </h1>
          <p className={styles.subtitle}>
            Discover top-rated stylists near you, book instantly, and manage your
            beauty routine — all from one elegant app.
          </p>
          <a href="#cta" className={styles.button}>
            Get Started
          </a>
        </div>

        {/* Image Column */}
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
            alt="Hair stylist at work"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
