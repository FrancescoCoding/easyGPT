# &lt;&lt;EasyGPT&gt;&gt;.advanced.setTemperature()

Influence how focused or random a response should be.

## Usage

```js
// Example of focused.
instance.advanced.setTemperature(0.2);

// Example of unfocused / more random.
instance.advanced.setTemperature(1.2);
```

## Parameters

| PARAMETER | TYPE | Default | DESCRIPTION |
|-----------|------|---------|-------------|
|temperature    |Number|N/A      |A higher value results in a more random response. <br/><br/> Where a lower value results in a more focused response. <br/><br/> Value must be between 0 and 2.|

## Returns
EasyGPT instance (&lt;&lt;EasyGPT&gt;&gt;)