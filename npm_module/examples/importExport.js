import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

// Create a new instance / context of EasyGpt.
const gpt = new EasyGpt();

// Set your API key.
// Create one for free @ https://platform.openai.com/account/api-keys
gpt.setApiKey(process.env.API_KEY);

// ? Basic series of messages, that we will export.
gpt
  .addMessage("Hello ChatGPT!")
  .addResponse("Hello! How can I assist you today?")
  .addMessage("Define import and export in 20 words.")
  .addResponse(
    `Import: The act of bringing data or code into a software program.
     Export: The act of saving data or code from a software program.`
  );

// Export the chatLog and print to the console.
const chatLog = gpt.advanced.exportChat();
// console.log(chatLog);

// Create another instance as an example of import.
const newChat = new EasyGpt();
gpt.setApiKey(process.env.API_KEY);

// Import the chat log from earlier.
newChat.advanced.importChat(chatLog);

// Continue the conversation.
newChat.addMessage("What was it that we were talking about again?");

// Get response from ChatGPT
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE RESPONSE
// ! Note: The definition provided is specific to software and programming context.
// ! Here are the definitions for import and export in the context of international trade:
// ! Import: Bringing goods or services into a country from a foreign country.
// ! Export: Sending goods or services from a country to another foreign country.
