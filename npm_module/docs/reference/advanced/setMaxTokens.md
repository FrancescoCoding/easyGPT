# &lt;&lt;EasyGPT&gt;&gt;.advanced.setMaxTokens()

Limits the maximum amount of tokens the ChatGPT API can use per request.

If the amount is too low it can result in the response being cut short.

[Pricing](https://openai.com/pricing)

> gpt-3.5-turbo	$0.002 / 1K tokens
## Usage

```js
instance.advanced.setMaxTokens(500);
```

## Parameters

| PARAMETER | TYPE | Default | DESCRIPTION |
|-----------|------|---------|-------------|
|tokens    |Number|N/A      |The max amount of tokens limit.|

## Returns
EasyGPT instance (&lt;&lt;EasyGPT&gt;&gt;)