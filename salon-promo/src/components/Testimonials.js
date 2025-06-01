import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah W.",
    text: "I love SalonApp! I can book my hair color session in two taps, and I’ve never been late thanks to the reminders.",
  },
  {
    name: "Mark T.",
    text: "As a father of two, scheduling me time is hard. This app makes it quick and easy to find a stylist that accepts kids in the salon.",
  },
  {
    name: "Priya K.",
    text: "I was skeptical about in-app payments, but it’s so convenient. No more fumbling for cash or card in the chair.",
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <h2 className={styles.heading}>What Our Users Are Saying</h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <p className={styles.text}>"{t.text}"</p>
              <p className={styles.author}>— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
