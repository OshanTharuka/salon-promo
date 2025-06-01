import React from "react";
import styles from "../styles/Values.module.css";

const valuesList = [
  {
    title: "Quality Stylists",
    desc: "We partner only with certified professionals. Every stylist is background-checked and highly rated.",
  },
  {
    title: "Customer-First Service",
    desc: "24/7 support, flexible rescheduling, and transparent pricing—your satisfaction is our priority.",
  },
  {
    title: "Affordable Pricing",
    desc: "No hidden fees. Competitive rates for every budget, with seasonal discounts and loyalty rewards.",
  },
];

export default function Values() {
  return (
    <section className={`section ${styles.values}`} id="values">
      <div className="container">
        <h2 className={styles.heading}>Our Values</h2>
        <div className={styles.list}>
          {valuesList.map((v) => (
            <div key={v.title} className={styles.item}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
