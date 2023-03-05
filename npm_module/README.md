# easyGPT: a gpt-3.5-turbo (ChatGPT) API wrapper 🤖

## Check out the original repository for more examples: [easyGPT Repository on GitHub](https://github.com/FrancescoCoding/easyGPT)

# Documentation

This quick guide provides step-by-step instructions for using the easygpt wrapper that sends requests to the ChatGPT API and returns you a response.

For more information about how the API works and fine-tuning for specific cases, please refer to [OpenAI&#39;s official documentation](https://platform.openai.com/docs/introduction)

## Prerequisites

- Basic knowledge of Node.js
- Node.js (at least version 14.x)
- An [API key](https://platform.openai.com/account/api-keys) for authentication purposes
- Your project must be configured to use ES6 modules.

## Setup

Open a terminal window and install the module.

```
npm i easygpt
```

Import the package.

```javascript
import EasyGpt from "easygpt";
```

Create a new instance of EasyGpt.

```javascript
const gpt = new EasyGpt();
```

Set your API key.

```javascript
gpt.setApiKey("your API key goes here.");
```

Create one for free @ [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

## Quickstart

### Basic Example

```javascript
// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Hello ChatGPT!")
// Give some instructions to the AI
    .addRule("Use emoticons in every answer and use a friendly tone.")

// Get the response from ChatGPT.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// EXAMPLE OUTPUT
// ! Hello! How can I assist you today? 😊
```

### Multiple Messages

```javascript
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
// ! Your name is Adam.

```

## Further Examples

[Examples](https://github.com/FrancescoCoding/easyGPT/tree/main/npm_module/examples)

## Documentation

### Class EasyGpt

| Constructor |
| ----------- |

| Paramater   | Explanation                                                                                                                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| saveContext | saveContext allows you to disable the saving of messages, rules & responses.<br />By default this is set to true. Please see this [example](https://github.com/FrancescoCoding/easyGPT/blob/main/npm_module/examples/noContext.js) for a more clear understanding. |

| Method       | Parameters        | Explanation                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setApiKey    | {String} API_KEY  | To use ChatGPT's API you are required to provide an API key.<br />You can acquire one from [Account API Keys - OpenAI](https://platform.openai.com/account/api-keys).                                                                                                                                                                                                                           |
| changeModel  | {String} model    | [Models - OpenAI API](https://platform.openai.com/docs/models/gpt-3) - You can expirement with different OpenAI models.<br />easyGPT defaults to "gpt-3.5-turbo". Limited testing has been done with other models.                                                                                                                                                                              |
| addRule      | {String} rule     | Limit ChatGPT's response within certain boundries. Check out<br />[Chat completion - OpenAI API](https://platform.openai.com/docs/guides/chat/introduction), for the addRule method easyGpt uses <br />"system" as the role. For an example of addRule in use look at<br />[pirateRule.js](https://github.com/FrancescoCoding/easyGPT/blob/main/npm_module/examples/pirateRule.js).                |
| addResponse  | {String} content | Manually add a response from ChatGPT. Check out<br />[Chat completion - OpenAI API](https://platform.openai.com/docs/guides/chat/introduction), for the addResponse method easyGPT<br />uses "assistant" as the role. For an example of addResponse in use<br />look at **[framedResponse.js](https://github.com/FrancescoCoding/easyGPT/blob/main/npm_module/examples/framedResponse.js).** |
| addMessage   | {String} content  | Add a prompt to later ask ChatGPT. Check out<br />[Chat completion - OpenAI API](https://platform.openai.com/docs/guides/chat/introduction), for the addMessage method easyGPT<br />uses "user" as the role.                                                                                                                                                                                     |
| clearChat    |                   | Clears the list of previous messages, responses and rules. For a<br />completely new conversation.                                                                                                                                                                                                                                                                                            |
| importChat   | {Array} chatLog  | A list of messages, exported from exportChat(); You might use<br />this to import a previously saved conversation.                                                                                                                                                                                                                                                                            |
| exportChat   |                   | Returns a list of messages which can be saved or added to a<br />new instance with importChat.                                                                                                                                                                                                                                                                                                |
| setMaxTokens | {Number} tokens   | Limits the maximum amount of tokens ChatGPT can use per request.<br />[Pricing (openai.com)](https://openai.com/pricing) gpt-3.5-turbo $0.002 / 1K tokens.                                                                                                                                                                                                                                      |
| async ask    |                   | Returns a response from the ChatGPT API for your list of messages,<br />rules & responses. You must await for this response.                                                                                                                                                                                                                                                                  |

### Response Object

| Field     | Type     | Explanation                                   |
| --------- | -------- | --------------------------------------------- |
| content   | {String} | The text output of ChatGPT.                   |
| rawResult | {Object} | The raw result obtained from the ChatGPT API. |

## Finishing notes

Created by [Francesco Gruosso](https://github.com/FrancescoCoding) and [Adam Govier](https://github.com/AdamGovier)

## Changelog

### 3.1.11

- No breaking changes. Added TypeScript support by adding the package's type definitions!
