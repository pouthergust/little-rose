import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

const keywords = [
  "amor",
  "saudades",
  "te amo"
]

const lovePhrases = [
  "Você é a razão do meu sorriso diário.",
  "Cada momento ao seu lado é um sonho que se torna realidade.",
  "Você é a minha primeira e última pensamento do dia.",
  "Te amo mais do que as palavras podem expressar.",
  "Sua presença ilumina minha vida.",
  "Meu amor por você cresce a cada dia.",
  "Você faz meu coração bater mais rápido e mais forte.",
  "Com você, todos os meus problemas parecem menores.",
  "Você é a pessoa com quem eu quero passar o resto da minha vida.",
  "Eu não consigo imaginar minha vida sem você.",
  "Você é a melhor parte de mim.",
  "Cada dia ao seu lado é uma nova aventura.",
  "Eu amo cada pequeno detalhe sobre você.",
  "Você é meu lar, onde quer que nós estejamos.",
  "Meu amor por você não conhece limites.",
  "Você faz o mundo parecer um lugar melhor.",
  "Eu sou eternamente grato por ter você na minha vida.",
  "Seu sorriso é a coisa mais bonita que eu conheço.",
  "Quando estou com você, tudo parece certo.",
  "Você é o meu sonho realizado.",
  "Eu amo a maneira como você me faz sentir.",
  "Você é a melhor coisa que já aconteceu comigo.",
  "Meu coração pertence a você.",
  "Com você, eu aprendi o verdadeiro significado do amor.",
  "Você é a luz da minha vida.",
  "Eu me sinto completo ao seu lado.",
  "Eu te amo mais do que qualquer coisa neste mundo.",
  "Você é a razão do meu felicidade.",
  "Não há ninguém com quem eu preferiria estar.",
  "Você é meu pensamento mais feliz.",
  "Eu sou a pessoa mais feliz do mundo por ter você.",
  "Você me faz sentir que sou amado e especial.",
  "Eu valorizo cada momento que passamos juntos.",
  "Você é a minha paz em meio ao caos.",
  "Eu amei você ontem, amo você hoje e amarei você para sempre.",
  "Sua voz é música para os meus ouvidos.",
  "Eu adoraria passar todos os meus dias ao seu lado.",
  "Você é o meu presente mais precioso.",
  "Amo a forma como você me olha.",
  "Você é o motivo pelo qual meu coração bate.",
  "Eu prometo estar sempre ao seu lado.",
  "Cada dia com você é um presente.",
  "Eu encontrei minha felicidade em você.",
  "Você é meu tudo.",
  "Nada pode nos separar.",
  "Meu amor por você é eterno.",
  "Você é meu porto seguro.",
  "Eu amo a forma como você me entende.",
  "Seu amor é o meu maior tesouro.",
  "Eu sempre estarei aqui para você.",
  "Você é a razão pela qual eu acordo sorrindo.",
  "Seu carinho faz meu coração derreter.",
  "Eu te amo mais do que posso descrever.",
  "Com você, eu me sinto completo.",
  "Você é o amor da minha vida.",
  "Eu não consigo ficar longe de você.",
  "Você é o sonho que eu nunca quero acordar.",
  "Seu amor é a minha inspiração.",
  "Cada momento com você é uma bênção.",
  "Eu sou grato por cada dia que passo ao seu lado.",
  "Você é a razão da minha alegria.",
  "Você é o sol que ilumina meu dia.",
  "Eu amo a forma como você sorri para mim.",
  "Você faz meu coração transbordar de amor.",
  "Eu nunca soube que poderia amar alguém tanto assim.",
  "Você é a parte mais importante da minha vida.",
  "Eu quero passar o resto da minha vida te amando.",
  "Eu sou tão sortudo por ter você.",
  "Você é o meu sonho realizado.",
  "Cada dia com você é uma nova aventura.",
  "Você é a pessoa mais especial para mim.",
  "Eu te amo com todo o meu coração.",
  "Você faz meu coração bater mais forte.",
  "Eu amo tudo sobre você.",
  "Você é a razão pela qual eu sou feliz.",
  "Eu nunca quero te perder.",
  "Você é o melhor que me aconteceu.",
  "Você é a razão da minha felicidade.",
  "Meu amor por você não tem fim.",
  "Eu sou tão feliz por ter você na minha vida.",
  "Você é meu eterno amor.",
  "Eu amei você desde o primeiro dia que te vi.",
  "Cada momento com você é inesquecível.",
  "Você é a melhor parte do meu dia.",
  "Eu não posso viver sem você.",
  "Você é a luz que ilumina meu caminho.",
  "Eu sou grato por ter você ao meu lado.",
  "Você é a razão do meu sorriso.",
  "Eu amo você mais a cada dia.",
  "Você é meu mundo inteiro.",
  "Cada dia com você é um presente.",
  "Eu sou a pessoa mais feliz por ter você.",
  "Você é o meu maior tesouro.",
  "Eu amo a maneira como você me faz sentir.",
  "Você é o amor da minha vida.",
  "Eu sempre vou te amar.",
  "Você é a minha razão de viver.",
  "Eu não consigo imaginar minha vida sem você.",
  "Você é a minha razão de ser feliz.",
  "Eu amo cada momento que passamos juntos.",
  "Você é o meu sonho e realidade.",
  "Eu sou completamente apaixonado por você.",
  "Você é a pessoa mais incrível que eu conheço.",
  "Cada segundo ao seu lado é precioso.",
  "Eu quero passar todos os meus dias com você.",
  "Você é a luz da minha vida.",
  "Eu nunca vou deixar você ir.",
  "Você é o meu maior amor.",
  "Eu te amo mais do que tudo.",
  "Você é a razão pela qual eu acordo todos os dias.",
  "Eu sempre vou estar aqui para você.",
  "Você é o amor da minha vida.",
  "Eu me sinto tão completo com você.",
  "Você é o meu sonho realizado.",
  "Eu amo a maneira como você me olha.",
  "Você é meu amor eterno.",
  "Cada momento com você é especial.",
  "Eu sou grato por ter você na minha vida.",
  "Você é a razão do meu sorriso.",
  "Eu nunca vou parar de te amar.",
  "Você é a pessoa que eu quero ao meu lado para sempre.",
  "Eu amo tudo sobre você.",
  "Você faz meu coração bater mais rápido.",
  "Eu sou tão feliz por ter você.",
  "Você é meu tudo.",
  "Eu não consigo viver sem você.",
  "Você é a razão da minha felicidade.",
  "Eu amo a forma como você me faz sentir.",
  "Você é a melhor parte de mim.",
  "Eu quero passar o resto da minha vida com você.",
  "Você é meu mundo inteiro.",
  "Eu sou completamente apaixonado por você.",
  "Você é a razão do meu sorriso.",
  "Eu sempre vou te amar.",
  "Você é a minha razão de viver.",
  "Cada momento com você é precioso.",
  "Eu sou grato por ter você na minha vida.",
  "Você é meu sonho realizado.",
  "Eu amo a maneira como você me faz sentir.",
  "Você é a luz da minha vida.",
  "Eu nunca vou deixar você ir.",
  "Você é meu amor eterno.",
  "Eu te amo mais a cada dia.",
  "Você é o melhor que me aconteceu.",
  "Eu não consigo imaginar minha vida sem você.",
  "Você é o meu maior tesouro.",
  "Eu sou tão feliz por ter você.",
  "Você é meu tudo.",
  "Cada dia com você é um presente.",
  "Eu quero passar todos os meus dias com você.",
  "Você é a razão do meu sorriso.",
  "Eu amo cada momento que passamos juntos.",
  "Você é o amor da minha vida.",
  "Eu sempre vou estar ao seu lado.",
  "Você é a minha razão de ser feliz.",
  "Eu nunca vou parar de te amar.",
  "Você é a luz que ilumina meu caminho.",
  "Eu sou eternamente grato por ter você.",
  "Você é a pessoa com quem eu quero passar minha vida.",
  "Eu amo a maneira como você me faz sentir.",
  "Você é a razão do meu sorriso diário.",
  "Cada momento com você é especial.",
  "Eu te amo mais do que palavras podem expressar.",
  "Você é a melhor coisa que já aconteceu comigo.",
  "Eu sou tão feliz por ter você na minha vida.",
  "Você é o meu sonho realizado.",
  "Cada dia com você é uma nova aventura.",
  "Você é o amor da minha vida.",
  "Eu não consigo imaginar minha vida sem você.",
  "Você é meu mundo inteiro.",
  "Eu sempre vou te amar.",
  "Você é a razão do meu sorriso.",
  "Eu sou eternamente grato por ter você.",
  "Você é a luz da minha vida.",
  "Eu nunca vou parar de te amar.",
  "Você é meu maior amor.",
  "Cada momento com você é precioso.",
  "Eu quero passar o resto da minha vida com você.",
  "Você é a razão pela qual eu sou feliz.",
  "Eu te amo mais a cada dia.",
  "Você é a melhor parte de mim.",
  "Eu sou completamente apaixonado por você.",
  "Você é meu sonho realizado.",
  "Cada dia com você é um presente.",
  "Eu sempre estarei aqui para você.",
  "Você é a minha razão de viver.",
  "Eu amo a maneira como você me faz sentir.",
]

export default function Home() {
  const [result, setResult] = useState();

  async function onClick(event) {
    event.preventDefault();
    // const randomNumber = getRandomNumber(0, 187);
    // const phrase = lovePhrases[randomNumber];
    // setResult(phrase);
    const keyword = keywords[getRandomNumber(0, keywords.length - 1)]
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
        <link rel="icon" href="/heart.png" />
      </Head>

      <main className={styles.main}>
        <img src="/heart-logo.svg" className={styles.logo} />
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

