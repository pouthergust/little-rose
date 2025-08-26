import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function (req, res) {
  if (!groq) {
    res.status(500).json({
      error: {
        message: "API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const keyword = req.body.keyword || '';
  if (keyword.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid key",
      }
    });
    return;
  }

  try {
    // const completion = await openai.createCompletion({
    //   model: "gpt-4o-mini",
    //   prompt: generatePrompt(keyword),
    //   temperature: 0.9,
    //   max_tokens: 150,
    // });
    const completion = await groq.chat.completions.create({
    messages: [{ role: "user", content: generatePrompt(keyword) }],
    model: "openai/gpt-oss-20b",
  });
    res.status(200).json({ result: completion.choices[0]?.message?.content || "" });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(keyword) {
  const capitalizedKeyword =
    keyword[0].toUpperCase() + keyword.slice(1).toLowerCase();
  return `Diga uma frase romantica usando a palavra chave: ${capitalizedKeyword}`;
}

