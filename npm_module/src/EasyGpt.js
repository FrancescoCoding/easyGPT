import axios from "axios";
import Message from "./Message.js";

export default class EasyGpt {
  #messages;

  constructor(saveContext) {
    this.model = "gpt-3.5-turbo";
    this.#messages = [];
    this.saveContext = saveContext ?? true;
  }

  /**
   *
   * @param {String} API_KEY ChatGPT API key https://platform.openai.com/account/api-keys
   * @returns working instance.
   */
  setApiKey(API_KEY) {
    this.API_KEY = API_KEY;

    // Builder pattern. Allows for trailing functions.
    return this;
  }

  /**
   * Fine tune with different models.
   * @param {String} model https://platform.openai.com/docs/models/gpt-3-5
   * @returns working instace.
   */
  changeModel(model) {
    this.model = model;

    return this;
  }

  /**
   * addRule is a function that allows you to add a rule to the chatbot.
   *  @param {String} rule The rule you want to add to the chatbot.
   *  @returns working instance.
   */
  addRule(rule) {
    this.#messages.push(new Message(rule, "system"));

    return this;
  }

  /**
   * Manually add a chatGPT response to the messages list.
   * @param {String} content The message content
   * @returns working instance.
   */
  addResponse(content) {
    this.#messages.push(new Message(content, "assistant"));

    return this;
  }

  /**
   * add a message to the list of messages.
   * @param {String} content The message content
   * @returns working instance.
   */
  addMessage(content) {
    this.#messages.push(new Message(content, "user"));

    return this;
  }

  /**
   * Removes all rules and previous messages.
   * @returns working instance.
   */
  clearChat() {
    this.#messages = [];

    return this;
  }

  /**
   * Import a previous chat.
   * ! If the instance has been used before importing the chat, you may want to clear the chat using ```instace.clearChat();```
   * @param {Array} chatLog An array of messages. Typically retrieved from ```instance.exportChat();```
   * @returns working instance.
   */
  importChat(chatLog) {
    this.#messages = [...this.#messages, ...chatLog];

    return this;
  }

  /**
   * Export the chat log so you can save it and import it again at a later date.
   * @returns chatLog: an array of messages.
   */
  exportChat() {
    return this.#messages;
  }

  /**
   * Asks ChatGpt.
   * You must await the answer.
   * @returns The message content.
   */
  async ask() {
    if (!this.API_KEY)
      throw Error("No API KEY PROVIDED USE instance.setApiKey(<your key>)");

    const apiUrl = "https://api.openai.com/v1/chat/completions"; // ChatGPT API URL

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: this.model,
          messages: this.#createMessageFormElement(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.API_KEY}`,
          },
        }
      );

      const messageContent = response.data.choices[0].message.content;

      // Automatically add message to message list.
      if (this.saveContext) {
        this.#messages.push(new Message(messageContent, "assistant"));
      } else {
        this.clearChat(); // Remove context.
      }

      return {
        content: messageContent,
        rawResult: response.data,
      };
    } catch (error) {
      throw Error("Error requesting to ChatGPT. Error: " + error);
    }
  }

  /**
   * Parses messages into a form readable list.
   * @returns array of messages.
   */
  #createMessageFormElement() {
    let tempMessagesArray = [];

    for (const message of this.#messages) {
      tempMessagesArray.push({
        content: message.content,
        role: message.role,
      });
    }

    return tempMessagesArray;
  }
}
