import express from "express";
import dotenv from "dotenv";
import EasyGpt from "easygpt";

const app = express();
app.use(express.json());

dotenv.config(); // Load .env file

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Your OpenAI API Key

app.post("/askgpt", async (req, res) => {
  const model = req.body.model;
  const messages = req.body.messages;

  let gpt = new EasyGpt();
  gpt.setApiKey(OPENAI_API_KEY);
  gpt.changeModel(model ?? "gpt-3.5-turbo");

  messages.forEach((message) => {
    gpt.addMessage(message.content, message.role);
  });

  // console.log(gpt);

  try {
    const response = await gpt.ask();
    res.json({
      answer: response.content,
    });
  } catch (error) {
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
