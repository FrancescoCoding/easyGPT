import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Create a new instance / context of EasyGpt.
const gpt = new EasyGpt();

// Set your API key.
// Create one for free @ https://platform.openai.com/account/api-keys
gpt.setApiKey(process.env.API_KEY);

// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Hello ChatGPT!");

// Plant a response from ChatGPT.
gpt.addResponse("What is 2 + 2?");

// You responding to above question.
gpt.addMessage("Can you repeat your question?");

// The parsed response object that the ChatGPT API responds with.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! Of course! What is the answer to 2 + 2?