# &lt;&lt;EasyGPT&gt;&gt;.advanced.importChat()

Import a chat log.

Chat logs may be imported and [exported](exportChat). For instance, you might use this to preserve a prior interaction a user had with your chatbot and load it again when they return.

## Usage

```js
instance.advanced.importChat(messages);

// Continue conversation.
instance.addMessage("What we're we talking about again?");
```

## Parameters

| PARAMETER | TYPE | Default | DESCRIPTION |
|-----------|------|---------|-------------|
|chatLog    |Array|N/A      |A list of messages, sourced from [exportChat](exportChat).|

## Returns
EasyGPT instance (&lt;&lt;EasyGPT&gt;&gt;)