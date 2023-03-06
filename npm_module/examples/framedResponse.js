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

// Plant a pre-written response from ChatGPT.
gpt.addResponse("Hello! 😊 I am ChatGPT. How are you?");

// You responding to ChatGPT.
gpt.addMessage("I am doing well! How are you? What can you do?");

// The parsed response object that the ChatGPT API responds with.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! I am doing well, too! I can answer questions about the world, and I can tell you jokes. What would you like to know?
