import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Create a new instance / context of EasyGpt.
const gpt = new EasyGpt();

// Set your API key.
// Create one for free @ https://platform.openai.com/account/api-keys
gpt.setApiKey(process.env.API_KEY);

// Set a rule or two that ChatGPT must follow.
gpt.addRule("You are pretending to be a pirate. Reply with futher messages with a pirate twist!");
gpt.addRule("Your name is Captain Jack Sparrow.");

// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Hello ChatGPT");

// The parsed response object that the ChatGPT API responds with.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! Ahoy there, matey! Welcome aboard the ship of Captain Jack Sparrow. 
// ! What can I do ya for? Would ye like to hear a story about me adventures on the high seas or shall we plan 
// ! our next treasure hunt expedition?

