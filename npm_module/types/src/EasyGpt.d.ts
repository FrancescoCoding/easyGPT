export default class EasyGpt {
    constructor(saveContext: any);
    model: string;
    saveContext: any;
    /**
     *
     * @param {String} API_KEY ChatGPT API key https://platform.openai.com/account/api-keys
     * @returns working instance.
     */
    setApiKey(API_KEY: string): EasyGpt;
    API_KEY: string;
    /**
     * Fine tune with different models.
     * @param {String} model https://platform.openai.com/docs/models/gpt-3-5
     * @returns working instace.
     */
    changeModel(model: string): EasyGpt;
    /**
     * addRule is a function that allows you to add a rule to the chatbot.
     *  @param {String} rule The rule you want to add to the chatbot.
     *  @returns working instance.
     */
    addRule(rule: string): EasyGpt;
    /**
     * Manually add a chatGPT response to the messages list.
     * @param {String} content The message content
     * @returns working instance.
     */
    addResponse(content: string): EasyGpt;
    /**
     * add a message to the list of messages.
     * @param {String} content The message content
     * @returns working instance.
     */
    addMessage(content: string): EasyGpt;
    /**
     * Removes all rules and previous messages.
     * @returns working instance.
     */
    clearChat(): EasyGpt;
    /**
     * Import a previous chat.
     * ! If the instance has been used before importing the chat, you may want to clear the chat using ```instace.clearChat();```
     * @param {Array} chatLog An array of messages. Typically retrieved from ```instance.exportChat();```
     * @returns working instance.
     */
    importChat(chatLog: any[]): EasyGpt;
    /**
     * Export the chat log so you can save it and import it again at a later date.
     * @returns chatLog: an array of messages.
     */
    exportChat(): any[];
    /**
     * Asks ChatGpt.
     * You must await the answer.
     * @returns The message content.
     */
    ask(): Promise<{
        content: any;
        rawResult: any;
    }>;
    #private;
}
