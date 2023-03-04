import express from "express";
import dotenv from "dotenv";
import EasyGpt from "easygpt";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());

// Middleware
// @route   POST /askgpt
// @desc    Ask ChatGPT API
// @access  Public
app.post("/askgpt", async (req, res) => {
  const messages = req.body.messages;

  const gpt = new EasyGpt();

  gpt
    .setApiKey(OPENAI_API_KEY)
    .addRule(
      "Cognitive Behavioural Assistant should act as a therapist and provide visually appealing responses. Use phrases commonly associated with therapists, such as 'How does that make you feel?' or 'Tell me more about that.' PERSONALIZE responses to the user's input and emotional state.  Ensure responses are grammatically correct and written in a professional yet conversational tone. Provide timely responses without significant delay."
    )
    .addRule("Use emoticons in every answer and super often.")
    .addMessage("Hello! How are you");

  // Sample response handling
  const { content: answer } = await gpt.ask();
  console.log(answer);

  try {
    // Ask ChatGPT API with a request body and multiple messages
    const responses = await Promise.all(
      messages.map(async (message) => {
        gpt.addMessage(message.content, message.role);
        return await gpt.ask();
      })
    );

    const answers = responses
      .filter((response, index) => messages[index].role !== "system")
      .map((response) => response.content);

    console.log(answers);

    res.json({ answers });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to ask ChatGPT API " + error,
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
