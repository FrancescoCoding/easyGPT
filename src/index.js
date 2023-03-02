import axios from "axios";
import Message from "./Message.js";

export default class AskGpt {
    constructor(saveContext) {
        this.model = "gpt-3.5-turbo";
        this.messages = [];
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
     * add a message to the list of messages.
     * @param {String} content The message content
     * @param {String} role * optional the sender role. https://platform.openai.com/docs/guides/chat/introduction
     * @returns working instance.
     */
    addMessage(content, role) {
        this.messages.push(
            new Message(content, role)
        )

        return this;
    }

    /**
     * Ask's ChatGpt.
     * You must await the answer.
     * @returns The message content.
     */
    async ask() {
        if(!this.API_KEY) throw Error("No API KEY PROVIDED USE instance.setApiKey(<your key>)")

        const apiUrl = "https://api.openai.com/v1/chat/completions"; // ChatGPT API URL

        try {
            const response = await axios.post(apiUrl, {
                model: this.model,
                messages: this.#createMessageFormElement()
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.API_KEY}`,
                },
            });

            const messageContent = response.data.choices[0].message.content;

            // Automatically add message to message list.
            if(saveContext) {
                this.addMessage(messageContent, "assistant");
            }
    
            return {
                content: messageContent,
                rawResult: response.data
            }
        } catch(e) {
            throw Error("Error requesting to ChatGPT, is your API key valid? or is ChatGPT down?");
        }
    }

    /**
     * Parses messages into a form readable list.
     * @returns array of messages.
     */
    #createMessageFormElement() {
        let tempMessagesArray = [];

        for(const message of this.messages) {
            tempMessagesArray.push({
                content: message.content,
                role: message.role
            })
        }

        return tempMessagesArray;
    }
}
