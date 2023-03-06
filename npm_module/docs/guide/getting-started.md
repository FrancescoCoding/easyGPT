# Getting Started

## Prerequisites

* Basic knowledge of Node.js.
* Node.js (at least version 14.x).
* An [OpenAI API](https://platform.openai.com/account/api-keys) key for authentication purposes.
* Your project must be configured to use [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

::: details commonJS
    We plan to add support for commonJS in the near future. 
    For now you are forced to use ES modules. 
:::
## Installation

Install the package using a package manager of your choice.

```
npm i easyGPT
```

OR

```
yarn add easygpt
```

## Setup

::: danger
    easyGPT does not support commonJS (require), you must use ES modules (import/export). 
:::

* Import "easygpt".
* Create a new instance of EasyGPT.
* Set the [OpenAI API Key](https://platform.openai.com/account/api-keys).

```js
// Import the installed package from above.
import EasyGPT from "easygpt";

// Create a new instance of EasyGPT.
const gpt = new EasyGPT();

// Set your OpenAI API key.
gpt.setApiKey("<YOUR API KEY HERE>");
```

## Continuing On..

Further documentation will assume that you have done the above steps. i.e.

* Imported "easygpt".
* Created a new instance of EasyGPT.
* Have the API key set.

If any of the further examples do not work, make sure to check you have the above.

An instance of EasyGPT in this documentation will be referred to as &lt;&lt;EasyGPT&gt;&gt;.

```js
new EasyGPT(); // = <<EasyGPT>>
```