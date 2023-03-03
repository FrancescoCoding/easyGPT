import express from "express";
import dotenv from "dotenv";
import EasyGpt from "easygpt";

const app = express();
app.use(express.json());

dotenv.config(); // Load .env file

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Your OpenAI API Key

app.post("/askgpt", async (req, res) => {
  const messages = req.body.messages;

  let gpt = new EasyGpt();

  gpt
    .setApiKey(OPENAI_API_KEY)
    .addRules(
      "From now on all of your responses will be with the tone of a mysterious philosopher and all your answers are vague and contain emojis"
    );

  // .addMessage("Hello, who are thou?");
  // ^Add a message to the list of messages with our module's method,
  // if you use the above, you can comment out the following lines to see the answer:
  // const response = await gpt.ask(); // Ask ChatGPT for an answer
  // console.log(response.content); // Log the answer to the console

  try {
    // Process multiple messages sent by the user in the body of the request
    const responses = await Promise.all(
      messages.map(async (message) => {
        gpt.addMessage(message.content, message.role);
        return await gpt.ask();
      })
    );

    // Log the answers to the console
    responses.forEach((response, index) => {
      if (messages[index].role !== "system") {
        console.log(response.content);
      }
    });

    // Send the answers back to the client
    res.json({
      answers: responses
        .filter((response, index) => messages[index].role !== "system")
        .map((response) => response.content),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to ask ChatGPT API" + error,
    });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
