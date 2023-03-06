# &lt;&lt;EasyGPT&gt;&gt;.addResponse()

Manually add a response from ChatGPT.

To achieve this easyGPT adds a message with the role of "assistant" to the stack.

> The assistant messages help store prior responses. They can also be written by a developer to help give examples of desired behavior. - [Chat completion - OpenAI API](https://platform.openai.com/docs/guides/chat/introduction)
## Usage

```js
instance.addResponse('My name is Bender Bending Rodríguez.');
```

## Parameters

| PARAMETER | TYPE | Default | DESCRIPTION |
|-----------|------|---------|-------------|
|content    |String|N/A      |The response you wish to plant.|

## Returns
EasyGPT instance (&lt;&lt;EasyGPT&gt;&gt;)