import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Create a new instance / context of EasyGpt.
const gpt = new EasyGpt();

// Set your API key.
// Create one for free @ https://platform.openai.com/account/api-keys
gpt.setApiKey(process.env.API_KEY);

// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Hello ChatGPT! My name is Adam!");

// ChatGPT API response.
// The reason for "let" is that we will be reusing response later.
let response = await gpt.ask();

// Print ChatGPT's response to the console!
const { content: answer } = await gpt.ask();
console.log(answer);

// EXAMPLE OUTPUT
// ! Hello Adam! It's nice to meet you. How can I assist you today?

// Add an aditional message to the stack.
gpt.addMessage("What was my name again?");

// ChatGPT API response.
const { content: newAnswer } = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(newAnswer);

// EXAMPLE OUTPUT
// ! Your name is Adam.

