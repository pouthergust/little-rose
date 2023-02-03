import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

const keywords = [
  "amor",
  "saudades",
  "te amo"
]

export default function Home() {
  const [result, setResult] = useState();

  async function onClick(event) {
    event.preventDefault();
    const keyword = keywords[getRandomNumber(0, keywords.length - 1)]
    console.log(keyword)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } 

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Little Rose</title>
        <link rel="icon" href="/heart-logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/heart-logo.png" className={styles.logo} />
        <div className={styles.content}>
          <p>Click para gerar uma frase</p>
          <button type="button"onClick={onClick} className={styles.button}>
            Gerar frase
          </button>
          <div className={styles.result}>{result}</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Feito com</span>
        <img src="/heart-white.svg" className={styles.icon} />
        <span>por mim</span>
      </footer>
    </div>
  );
}

