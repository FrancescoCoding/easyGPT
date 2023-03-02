# easygpt a gpt-3.5-turbo (ChatGPT model) API wrapper 🤖

This quick guide provides step-by-step instructions for using the easygpt wrapper that sends requests to the ChatGPT API and returns you a response.

For more information about how the API works and fine-tuning for specific cases, please refer to [OpenAI&#39;s official documentation](https://platform.openai.com/docs/introduction)

## Prerequisites

- Basic knowledge of Node.js
- Node.js (at least version 14.x)
- An [API key](https://platform.openai.com/account/api-keys) for authentication purposes

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
const gpt = new EasyGPT();
```

Set your API key.

```javascript
gpt.setApiKey("your API key goes here.");
```

## Usage

Add a message. (Note: you can add multiple messages to keep the context.)

```javascript
/*
    There are two paramaters of addMessage.
        1.) The message content.
        2.) The role of the user (system, user, assistant). https://platform.openai.com/docs/guides/chat/introduction
        if no role is provided it automatically defaults to "user".
*/
gpt
    .addMessage("Who won the world series in 2020?")    // Below is chatgpt's response
    .addMessage("The Los Angeles Dodgers won the World Series in 2020.", "assistant")
    .addMessage("Where was it played?")
```

Ask chatgpt.

```javascript
gpt.ask().then(response => {
	console.log(response.content)
})

// also a rawResult object is appended to the response object, if you need more information.

// ALTERNATIVE METHOD WITH AWAIT

const response = await gpt.ask();
console.log(response.content);
```

**By default context is saved. So when you ask ChatGpt, it's answer will automatically be added to the list of messages. To disable this, disable context saving in the constructor.**

```javascript
const gpt = new EasyGpt(false);
```

## Finishing notes

Messages are not cleared when you use the ask() function. The context is saved allowing you to add more messages without repetition. If you need to clear the messages you will need to create a new instance of EasyGpt.

Created by [Francesco Gruosso](https://github.com/FrancescoCoding) and [Adam Govier](https://github.com/AdamGovier)
