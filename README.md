# Little Rose - Gerador de Frases Românticas

O **Little Rose** é um aplicativo simples que gera frases românticas com base em palavras-chave. Ele utiliza o SDK do Groq para criar mensagens personalizadas e é construído com [Next.js](https://nextjs.org/) e [React](https://reactjs.org/).

## Funcionalidades

- Geração de frases românticas com palavras-chave aleatórias.
- Interface simples e intuitiva.
- Integração com o Groq SDK para respostas criativas.

## Pré-requisitos

- Node.js versão >= 14.6.0 ([instale aqui](https://nodejs.org/en/))
- Ubuntu 24.04.2 LTS (dev container recomendado)
- Chave de API do Groq ([obtenha aqui](https://console.groq.com/keys))

## Instalação

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd little-rose
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Copie o arquivo de variáveis de ambiente de exemplo:

   ```bash
   cp .env.example .env
   ```

4. Adicione sua chave de API do Groq ao arquivo `.env`:

   ```env
   GROQ_API_KEY=<sua-chave-aqui>
   ```

5. Inicie a aplicação:

   ```bash
   npm run dev
   ```

6. Acesse o aplicativo no navegador:

   ```bash
   $BROWSER http://localhost:3000
   ```

## Como usar

1. Clique no botão "Gerar frase" na página inicial.
2. O aplicativo selecionará uma palavra-chave aleatória e gerará uma frase romântica.
3. A frase será exibida na tela.

## Estrutura do Projeto

- **`/pages/api/generate.js`**: Endpoint que utiliza o Groq SDK para gerar frases.
- **`/pages/index.js`**: Interface principal do aplicativo.
- **`/styles`**: Estilos CSS para a aplicação.

## Recursos

- [Documentação oficial do Groq SDK](https://console.groq.com/docs/overview)
- [Next.js](https://nextjs.org/docs)

---

Atualizado para refletir as funcionalidades reais
