import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Create a new instance of EasyGpt.
const gpt = new EasyGpt();

// Set your API key.
gpt.setApiKey(process.env.API_KEY);

// Set the presence penalty to a positive value.
gpt.setPresencePenalty(-1.5);

// Limit output.
gpt.addRule("Limit responses to 150 characters.");

// Add some prompts to the context.
gpt.addMessage('Tell me about the history of pizza.');

let response = await gpt.ask();

// Log the response to the console.
console.log(response.content);