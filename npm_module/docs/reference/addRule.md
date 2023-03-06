# &lt;&lt;EasyGPT&gt;&gt;.addRule()

Limit ChatGPT's response within certain boundries.

To achieve this easyGPT adds a message with the role of "system" to the stack.

> The system message helps set the behavior of the assistant. In the example above, the assistant was instructed with “You are a helpful assistant.” - [Chat completion - OpenAI API](https://platform.openai.com/docs/guides/chat/introduction)
## Usage

```js
instance.addRule('Pretend to be a pirate!');
```

## Parameters

| PARAMETER | TYPE | Default | DESCRIPTION |
|-----------|------|---------|-------------|
|rule    |String|N/A      |The rule you wish ChatGPT to abide by.|

## Returns
EasyGPT instance (&lt;&lt;EasyGPT&gt;&gt;)