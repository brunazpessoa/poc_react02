"use client";
import styles from "./polaroid.module.css";

export default function Polaroid({ url, text }) {
  return (
    <div className="light-mode">
      <div className="container">
        <div className="card">
          <figure className={styles.polaroid}>
            <img alt={text} src={url} />
            <figcaption>{text}</figcaption>
          </figure>
        </div>
      </div>
      <button
        id="toggleMode"
        onClick={() => {
          document.body.classList.toggle("dark-mode");
          document.body.classList.toggle("light-mode");
        }}
      >
        🌞/🌙
      </button>
    </div>
  );
}
