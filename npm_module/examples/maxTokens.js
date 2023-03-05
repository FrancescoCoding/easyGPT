import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Create a new instance / context of EasyGpt.
const gpt = new EasyGpt();

// Set your API key.
// Create one for free @ https://platform.openai.com/account/api-keys
gpt.setApiKey(process.env.API_KEY);

// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Write to me about climate change.");

// $0.002 / 1K tokens
// ChatGPT charges on how many tokens you use. If you wish to limit these costs you can set the maximum amount of tokens used per message.
// You may ender up with a shorter response because of it.
gpt.setMaxTokens(100);

// The parsed response object that the ChatGPT API responds with.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! Dear reader,
// ! Climate change is a pressing issue that impacts our world in many ways. It refers to the long-term changes in global temperature, rainfall, and weather patterns caused by human activities and changes in the Earth's natural systems.
// ! One of the primary causes of climate change is the release of greenhouse gases like carbon dioxide (CO2) 
// ! into the atmosphere. CO2 is a natural component of the Earth's atmosphere that helps to keep the planet warm,
// ! but too much of it can lead to a
// ? Response cut off due to lack of tokens.