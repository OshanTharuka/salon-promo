import React from "react";
import styles from "../styles/Features.module.css";

const featureList = [
  {
    title: "Discover Stylists Nearby",
    desc: "Browse local salon profiles, read reviews, and find the perfect stylist.",
    icon: "💇‍♀️",
  },
  {
    title: "One-Tap Booking",
    desc: "Select date & time, choose your favorite stylist, and confirm instantly.",
    icon: "📅",
  },
  {
    title: "Secure Payments",
    desc: "Pay in-app with credit card or digital wallet—no cash needed.",
    icon: "💳",
  },
  {
    title: "Appointment Reminders",
    desc: "Get push notifications & SMS reminders so you never miss an appointment.",
    icon: "🔔",
  },
];

export default function Features() {
  return (
    <section className={`section ${styles.features}`} id="features">
      <div className="container">
        <h2 className={styles.heading}>App Features</h2>
        <div className={styles.grid}>
          {featureList.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
