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
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/heart.png" className={styles.icon} />
        <h3>Click para gerar uma frase</h3>
        <input type="button" role="button" value="Gerar frase" onClick={onClick}/>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

