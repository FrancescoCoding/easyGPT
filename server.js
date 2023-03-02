const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

dotenv.config(); // Load .env file

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Your OpenAI API Key

app.post("/ask-gpt3.5", async (req, res) => {
  const model = req.body.model;
  const messages = req.body.messages;
  const apiUrl = "https://api.openai.com/v1/chat/completions"; // ChatGPT API URL

  // Below is the axios request to the ChatGPT API
  try {
    const response = await axios.post(
      apiUrl,
      {
        model: model ? model : "gpt-3.5-turbo",
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
      answer: response.data.choices[0].message.content, // The answer from the ChatGPT API
    });
  } catch (error) {
    // If there is an error, log it to the console
    console.error(error);
    res.status(500).json({
      error: "Failed to ask ChatGPT API",
    });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
