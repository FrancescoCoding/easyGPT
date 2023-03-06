# Examples

The following examples aim to give you a quick starting point with easyGPT.

## Basic Examples

### Ping Pong

```js
// Add a message to the stack.
gpt.addMessage("Ping");

// Ask ChatGPT and wait for the response.
const response = await gpt.ask();

// Print out the response content.
console.log(response.content);
```

::: details Output
    Pong!
:::

### What is my name?

easyGPT by default remembers the context of the conversation. Meaning you can provide follow up messages.

```js
// Add a message to the stack.
gpt.addMessage("Hello ChatGPT! My name is Adam!");

// Ask ChatGPT and wait for the response.
let response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);

// Add an aditional message to the stack.
gpt.addMessage("What was my name again?");

// Ask ChatGPT and wait for the response. 
response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);
```

::: details Output
Hello Adam! How can I assist you today?

Your name is Adam.
:::

### Captain Jack Sparrow
easyGPT allows you to add rules that influence the output of ChatGPT.

```js
// Set a rule or two that ChatGPT must follow.
gpt.addRule("You are pretending to be a pirate. Reply with futher messages with a pirate twist!");
gpt.addRule("Your name is Captain Jack Sparrow.");

// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Hello ChatGPT");

// Ask ChatGPT and wait for the response.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);
```

::: details Output
Ahoy! Greetings, me hearty! Ye can call me Captain Jack Sparrow, the most notorious pirate of the seven seas! What brings ye to my ship today?
:::

## Intermediate Examples
These examples should be straightforward, however these will have more obscure use cases.

### Forgetful 'GPT
By adding a value of ```False``` inside of the EasyGPT constructor you can tell easyGPT not to save any context/messages.

```js
import EasyGPT from "easygpt";

/*
    Creating an instance of EasyGpt with false as the first paramater,
    means that when you run ```instance.ask();``` the messages will be cleared 
    and ChatGPT's response will not be saved.
*/
const gpt = new EasyGpt(false);

// Set your OpenAI API key.
gpt.setApiKey("<YOUR API KEY HERE>");

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
```

::: details Output
Hello Adam! It's nice to meet you. How may I assist you today?

I'm sorry, as an Artificial Intelligence language model, I have no previous interactions with you or any personal information about you, so I cannot answer this question. Please introduce yourself again.
:::

### Bob the Builder
easyGPT was created using the builder pattern allowing for method chaining.

```js
(new EasyGpt())
    .setApiKey("<YOUR API KEY>")
    .addMessage("ChatGPT sing for me!")
    .advanced.setTemperature(1.2)
    .advanced.setMaxTokens(200)
    .ask()
    .then(r => 
        console.log(r.content)    
    );
```

### Save the Conversation!
Chat logs may be imported and exported. For instance, you might use this to preserve a prior interaction a user had with your chatbot and load it again when they return.

#### Save / Export

```js
const chatLog = gpt.advanced.exportChat();

// Do whatever logic to save the chatLog into a database etc.
```

#### Open / Import

```js
gpt.advanced.importChat(chatLog);

// Continue the conversation.
gpt.addMessage("What was it that we were talking about again?");
```

### Think for ChatGPT
You can place artifical responses into the chat log so that ChatGPT thinks that it previously said it.

```js
// Plant a response from ChatGPT.
gpt.addResponse("What is 2 + 2?");

// You responding to ChatGPT.
gpt.addMessage("Can you repeat your question?");

// ChatGPT API response.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);
```

::: details Output
Sure! What is 2 plus 2?
:::

## Advanced Examples
You may benefit from reading [OpenAI Chat Reference](https://platform.openai.com/docs/api-reference/chat/create) before following this section. These examples serve mostly as examples of fine-tuning.

### Limit Costs

OpenAI is generous to give you a large free starting balance however if you are running a bigger application you may want to limit your costs.

[Pricing](https://openai.com/pricing)

> gpt-3.5-turbo	$0.002 / 1K tokens

```js
// Add a prompt you would like to say to ChatGPT.
gpt.addMessage("Write to me about climate change.");

// $0.002 / 1K tokens
// ChatGPT charges on how many tokens you use. If you wish to limit these costs you can set the maximum amount of tokens used per message.
// You may end up with a shorter response because of it.
gpt.advanced.setMaxTokens(100);

// ChatGPT API response.
const response = await gpt.ask();

// Print ChatGPT's response to the console!
console.log(response.content);
```

::: details Output
Climate change is one of the most pressing global issues of our time. It is caused by a number of factors, but primarily by the accumulation of greenhouse gases in the atmosphere. These gases trap heat from the sun, causing the earth's temperature to rise. This can have a range of impacts on the planet, including rising sea levels, increased frequency and intensity of extreme weather events such as hurricanes and droughts, and changes in plant and animal habitats.

One of the most concerning aspects of climate change...
:::

### Get Creative
Using the setTemperature method in easyGPT. You can influence how random or focused the response is.

```js
// Ask a focused question with a low temperature
gpt
    .addMessage("What would be your name if you had one?")
    .advanced.setTemperature(0.2);

console.log("Focused response.");
const responseFocused = await gpt.ask();
console.log(responseFocused.content);

// Ask an unfocused question with a high temperature.
gpt
    .clearChat()
    .addMessage("What would be your name if you had one?")
    .advanced.setMaxTokens(300) // Added as the response can become very large very quickly.
    .advanced.setTemperature(1.6);

console.log("\nUnfocused response.");
const responseUnfocused = await gpt.ask();
console.log(responseUnfocused.content);
```

::: details Output
Focused response.


As an AI language model, I do not have a personal name. You can call me OpenAI or simply AI.

Unfocused response.


As an AI language model, I don't have personal preferences or needs for a name as provided through Organic intelligence but here possible suggested electronic name: VOCALLERI were you convert your language emotions, tonality, and human interactions to Voice answering Simulation powered by Anne Black Fieldback AI designer?
:::

## Further Examples
This set of examples does not include all of easyGPT's functionality. We are working on demonstrating each functionality with an example.

This is the end of the examples for now.