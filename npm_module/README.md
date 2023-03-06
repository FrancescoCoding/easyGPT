# easyGPT: ChatGPT API wrapper 🤖

Generate human-like text effortlessly with easyGPT - the powerful ChatGPT API wrapper.

```javascript
import EasyGPT from "easygpt";
const gpt = new EasyGPT();

gpt
    .setApiKey("<YOUR API KEY HERE>")
    .addMessage("Hello ChatGPT!");
    .then(response => console.log(response))    
```

## Installation
Before installing make sure your Node.js version is at least v14.

[Your project must be running ES Modules](https://easygpt.dev/guide/getting-started.html#setup).

```
$ npm i easygpt
```

## Docs
* **In-Depth documentation can be found on [easygpt.dev](https://easygpt.dev/).**
* **[easyGPT Repository on GitHub](https://github.com/FrancescoCoding/easyGPT).**

## Quick Start

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

### Basic Example

```javascript
// Add a prompt you would like to say to ChatGPT.
gpt
  .addMessage("Hello ChatGPT!")
  // Give some instructions to the AI
  .addRule("Use emoticons in every answer and use a friendly tone.");

// Get the response from ChatGPT.
const response = await gpt.ask();

console.log(response.content);
```
#### Response
> Hello! How can I assist you today? 😊

### Multiple Messages Example

```javascript
gpt.addMessage("Hello ChatGPT! My name is Adam!");

let response = await gpt.ask();

console.log(response.content);

// Add an additional  message to the stack.
gpt.addMessage("What was my name again?");

response = await gpt.ask();

console.log(response.content);
```

#### Responses
> Hello Adam! It's nice to meet you. How can I assist you today?

> Your name is Adam.


## Further Examples

There is a long list of tested examples on our documentation site.


[easygpt.dev/guide/examples](http://easygpt.dev/guide/examples.html)

## Created By

Francesco Gruosso - [Github](https://github.com/FrancescoCoding) / [LinkedIn](https://www.linkedin.com/in/fran-dev/) / [Website](https://fran-dev.com/portfolio)

Adam Govier - [Github](https://github.com/AdamGovier) / [LinkedIn](https://www.linkedin.com/in/adam-govier/) / [Website](https://adamgovier.co.uk/)
