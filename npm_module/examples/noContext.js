import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

/*
    Creating an instance of EasyGpt with false as the first paramater,
    means that when you run ```instance.ask();``` the messages will be cleared 
    and ChatGPT's response will not be saved.
*/
const gpt = new EasyGpt(false);

// Set your API key.
// Create one for free @ https://platform.openai.com/account/api-keys
gpt.setApiKey(process.env.API_KEY);

// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Hello ChatGPT! My name is Adam!");

// ChatGPT API response.
// The reason for "let" is that we will be reusing response later.
let response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! Hello Adam! It's nice to meet you. How can I assist you today?

// Add an aditional message to the stack.
gpt.addMessage("What was my name again?");

// ChatGPT API response.
response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! I'm sorry, I do not have access to your personal information. Could you please tell me your name?
// ? Notice it doesn't remember the name provided as context saving is turned off.
