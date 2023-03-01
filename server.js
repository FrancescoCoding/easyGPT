const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post("/ask-gpt3.5", async (req, res) => {
  const model = req.body.model;
  const messages = req.body.messages;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      apiUrl,
      {
        model: model,
        messages: messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    res.json({
      answer: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to ask ChatGPT API",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
