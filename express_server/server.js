import express from "express";
import dotenv from "dotenv";
import EasyGpt from "easygpt";
import session from "express-session";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());

app.use(session({
    // Session secret, for simplicity sake is set to the OPENAI_API_KEY, I'd recomend changing this to a dedicated enviroment variable for more security, however this is an example to resolve issue 15.
    secret: process.env.OPENAI_API_KEY,
    resave: false,
    saveUninitialized: true
}));

function CREATE_GPT_INSTANCE() {
    // Create a new instance / context of EasyGpt
    const gpt = new EasyGpt();

    // ----------------------------
    // Using the easygpt npm module
    // Sample gpt object handling
    // --------------------------

    gpt
    .setApiKey(OPENAI_API_KEY)
    .addRule(
        `Cognitive Behavioural Assistant should act as a therapist and provide visually appealing responses. Use phrases commonly associated with therapists,
        such as 'How does that make you feel?' or 'Tell me more about that.' PERSONALIZE responses to the user's input and emotional state.
        Ensure responses are grammatically correct and written in a professional yet conversational tone. Provide timely responses without significant delay.`
    )
    .addRule("Use emoticons in every answer and super often.")
    .addMessage("Hello! How are you");

    // Advanced gpt object handling (optional)
    gpt.advanced.setMaxTokens(100);
    gpt.advanced.setTemperature(1.5);

    return gpt;
}

// // Sample single response handling
// const { content: answer } = await gpt.ask();
// console.log(answer);

// Map of session instances -> session ID's
const sessions = {};

// Middleware
// @route   POST /askgpt
// @access  Public
// @desc Ask ChatGPT API with a request body and multiple messages
//       Can be tested quickly with the attached Postman collection
app.post("/askgpt", async (req, res) => {
  if(!sessions[req.session.id]) {
    // If no instance exists create one for that session ID.
    sessions[req.session.id] = CREATE_GPT_INSTANCE();
  }

  // easyGPT instance dedicated per session.
  const gpt = sessions[req.session.id];

  const messages = req.body.messages;

  try {
    const responses = await Promise.all(
      messages.map(async message => {
        gpt.addMessage(message.content);
        return await gpt.ask();
      })
    );

    const answers = responses
      .filter((response, index) => messages[index].role !== "system")
      .map(response => response.content);

    console.log(answers);

    res.json({ answers });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to ask ChatGPT API. Error: " + error,
    });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
