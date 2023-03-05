// Import EasyGpt and dotenv
import EasyGpt from "../index.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a new instance of EasyGpt
const gpt = new EasyGpt();

// Set the API key
gpt.setApiKey(process.env.API_KEY);

// Ask a focused question with a low temperature
gpt.addMessage("Finish the first paragraph: The quick brown fox jumps over the lazy dog.");
gpt.setTemperature(0.2);
console.log("Focused response.");
const responseFocused = await gpt.ask();
console.log(responseFocused.content);

// Ask an unfocused question with a high temperature.
gpt.clearChat();
gpt.addMessage("Finish the first paragraph: The quick brown fox jumps over the lazy dog.");
gpt.setMaxTokens(200); // Added as the response can become very large very quickly.
gpt.setTemperature(1.6);
console.log("\nUnfocused response.");
const responseUnfocused = await gpt.ask();
console.log(responseUnfocused.content);

/*
    In summary, this code imports the EasyGpt library and dotenv, 
    sets the API key, and then asks two different questions using different temperatures. 
    The responses are logged to the console for the user to see.
*/