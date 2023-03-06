# &lt;&lt;EasyGPT&gt;&gt;.ask() (async)

This function generates a request that includes your chat log and settings and sends it to the ChatGPT API. It then provides a [response object](/reference/ResponseObject).

This method takes a bit of time so you must await it or use then() to retrieve the response object.

```js
const response = await instance.ask();

// Do something with response.
```
OR
```js
instace.ask()
    .then(response => {
        // Do something with response.
    })
```

## Parameters

N/A

## Returns

[ResponseObject](ResponseObject)