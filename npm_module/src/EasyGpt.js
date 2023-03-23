import axios from "axios";
import Message from "./Message.js";

export default class EasyGpt {
  #messages;
  #saveContext;
  #API_KEY;
  #model;

  // ChatGPT Options
  #options;

  constructor(saveContext) {
    this.#model = "gpt-3.5-turbo";
    this.#messages = [];
    this.#saveContext = saveContext ?? true;

    this.#options = {
      max_tokens: undefined,
      temperature: undefined,
      presence_penalty: undefined,
    };

    this.advanced = {
      setMaxTokens: this.#setMaxTokens.bind(this),
      setTemperature: this.#setTemperature.bind(this),
      setPresencePenalty: this.#setPresencePenalty.bind(this),
      setFrequencyPenalty: this.#setFrequencyPenalty.bind(this),
      exportChat: this.#exportChat.bind(this),
      importChat: this.#importChat.bind(this),
      changeModel: this.#changeModel.bind(this),
    };
  }

  /**
   *
   * @param {String} API_KEY ChatGPT API key https://platform.openai.com/account/api-keys
   * @returns {Object} working instance.
   */
  setApiKey(API_KEY) {
    this.#API_KEY = API_KEY;

    // Builder pattern. Allows for trailing functions.
    return this;
  }

  /**
   * Fine tune with different models. Default "gpt-3.5-turbo".
   * @param {String} model https://platform.openai.com/docs/models/gpt-3-5
   * @returns {Object} working instace.
   */
  #changeModel(model) {
    this.#model = model;

    return this;
  }

  /**
   * addRule is a function that allows you to add a rule to the chatbot.
   *  @param {String} rule The rule you want to add to the chatbot.
   *  @returns {Object} working instance.
   */
  addRule(rule) {
    this.#messages.push(new Message(rule, "system"));

    return this;
  }

  /**
   * Manually add a chatGPT response to the messages list.
   * @param {String} content The message content
   * @returns {Object} working instance.
   */
  addResponse(content) {
    this.#messages.push(new Message(content, "assistant"));

    return this;
  }

  /**
   * add a message to the list of messages.
   * @param {String} content The message content
   * @returns {Object} working instance.
   */
  addMessage(content) {
    this.#messages.push(new Message(content, "user"));

    return this;
  }

  /**
   * Get all the messages in the chat.
   * @returns {Array} messages
   **/
  getMessages() {
    return this.#messages.filter(message => message.role !== "system");
  }

  /**
   * Removes all rules and previous messages.
   * @returns {Object} working instance.
   */
  clearChat() {
    this.#messages = [];

    return this;
  }

  /**
   * Removes all the messages in the chat except for the system rules.
   * The below returns the instance so you can chain functions.
   * @returns {Object} working instance.
   **/
  clearChatButRules() {
    this.#messages = this.#messages.filter(
      message => message.role === "system"
    );

    return this;
  }

  /**
   * Sends removes the chat if the max context is exceeded.
   * Determines the number the model will consider when generating a response.
   * Note that the more context you give the model, the more tokens will be used.
   * It will also take longer to generate a response.
   * @param {Number} maxContext The max context to allow (in messages).
   * @returns {Object} working instance.
   **/
  clearMessagesIfExceedsMaxContext(maxContext) {
    // currentContext is the number of interactions with the bot.
    const currentContext = Math.floor(this.getMessages().length / 2);

    if (currentContext >= maxContext) {
      console.log("Clearing messages");
      this.clearChatButRules();
    }

    return this;
  }

  /**
   * Import a previous chat.
   * ! If the instance has been used before importing the chat, you may want to clear the chat using ```instace.clearChat();```
   * @param {Array} chatLog An array of messages. Typically retrieved from ```instance.exportChat();```
   * @returns {Object} working instance.
   */
  #importChat(chatLog) {
    this.#messages = [...this.#messages, ...chatLog];

    return this;
  }

  /**
   * Export the chat log so you can save it and import it again at a later date.
   * @returns chatLog: an array of messages.
   */
  #exportChat() {
    return this.#messages;
  }

  /**
   * Limit the max amount of tokens used per request for all further messages until set otherwise.
   * https://openai.com/pricing gpt-3.5-turbo	$0.002 / 1K tokens
   * @param {Number} tokens The limit of tokens.
   * @returns {Object} working instance.
   */
  #setMaxTokens(tokens) {
    this.#options.max_tokens = tokens;

    return this;
  }

  /**
   * Set the temperature for generating text for all further messages until set otherwise.
   * Temperature controls the level of randomness in the generated output.
   * https://platform.openai.com/docs/api-reference/chat/create.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * @param {Number} temperature The temperature to use. Must be between 0 and 2.
   * @returns {Object} The working instance.
   */
  #setTemperature(temperature) {
    if (temperature > 2 || temperature < 0)
      throw new Error("Temperature must be between 0 and 2.");

    this.#options.temperature = temperature;

    return this;
  }

  /**
   * Set the penalty applied to new tokens based on their appearance in the text so far,
   * affecting the model's likelihood to talk about new topics.
   * Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
   * This value is set for all further messages until set otherwise
   * https://platform.openai.com/docs/api-reference/chat/create
   * @param {Number} presencePenalty The presence penalty to use. Must be between -2 and 2.
   * @returns {Object} The working instance.
   */
  #setPresencePenalty(presencePenalty) {
    if (presencePenalty > 2 || presencePenalty < -2)
      throw new Error("The presence penalty must be between -2 and 2.");

    this.#options.presence_penalty = presencePenalty;

    return this;
  }

  /**
    decrease/increase the model's likelihood to repeat the same line verbatim for all further messages until set otherwise.
    Positive values: decrease.
    Negative values: increase.
    https://platform.openai.com/docs/api-reference/chat/create
    @param {Number} frequencyPenalty The frequency penalty to use. Must be between -2 and 2.
    @returns {Object} The working instance.
  */
  #setFrequencyPenalty(frequencyPenalty) {
    if (frequencyPenalty > 2 || frequencyPenalty < -2)
      throw new Error("The  frequency penalty must be between -2 and 2.");

    this.#options.frequency_penalty = frequencyPenalty;

    return this;
  }

  /**
   * Asks ChatGpt.
   * You must await the answer.
   * @returns The message content.
   */
  async ask() {
    if (!this.#API_KEY)
      throw Error("No API KEY PROVIDED USE instance.setApiKey(<your key>)");

    const apiUrl = "https://api.openai.com/v1/chat/completions"; // ChatGPT API URL

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: this.#model,
          messages: this.#createMessageFormElement(),
          ...this.#options, // Add options such as max_tokens
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.#API_KEY}`,
          },
        }
      );

      const messageContent = response.data.choices[0].message.content;

      // Automatically add message to message list.
      if (this.#saveContext) {
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
