import axios from "axios";
import Message from "./Message.js";

class AskGpt {
    constructor() {
        this.model = "gpt-3.5-turbo";
        this.messages = [];
    }

    setApiKey(API_KEY) {
        this.API_KEY = API_KEY;

        // Builder pattern. Allows for trailing functions.
        return this;
    }

    changeModel(model) {
        this.model = model;

        return this;
    }

    addMessage(content, role) {
        this.messages.push(
            new Message(content, role)
        )

        return this;
    }

    async ask() {
        const apiUrl = "https://api.openai.com/v1/chat/completions"; // ChatGPT API URL

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

        return {
            content: response.data.choices[0].message.content,
            rawResult: response.data
        }
    }

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

export default new AskGpt();
