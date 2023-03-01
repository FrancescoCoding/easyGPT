# Node Template for gpt-3.5 (ChatGPT model) API 🤖

This quick guide provides step-by-step instructions for creating a Node.js server that sends requests to the ChatGPT API to generate responses for your chatbot.

For more information about how the API works and fine-tuning for specific cases, please refer to [OpenAI's official documentation](https://platform.openai.com/docs/introduction)

## Prerequisites
Basic knowledge of Node.js  
Node.js (at least version 14.x)  
An [API key](https://platform.openai.com/account/api-keys) for authentication purposes

## Setup

Open a terminal window and navigate to the directory where you want to clone the repository and run the following command:
```
git clone https://github.com/FrancescoCoding/node-chatgpt3.5-api-starter-template.git
```
Navigate to the newly created directory:
```
cd node-chatgpt3.5-api-starter-template
```
Install the dependencies using the following command:
```
npm install
```
Create a .env file in the root directory of the project and add the following line:
```
OPENAI_API_KEY=<your-api-key>
```

## Running the server
```
npm start
```

The server should now be running on http://localhost:3000. You can test the server by sending a POST request to http://localhost:3000/ask-gpt3.5 with the following JSON body:
```
    "messages": [
        {
            "role": "user",
            "content": "Hello ChatGPT!"
        }
    ]
```
Replace "Hello, ChatGPT!" with your own message.

The response should contain the generated text from the ChatGPT API:
```
{
    "answer": "Hello Francesco! Nice to meet you. How can I assist you today?"
}
```

You can also find the Postman collection for the request in this repository

![image](https://user-images.githubusercontent.com/64712227/222243778-33f204b8-83d9-4069-bb69-a1a3c440fd82.png)


Awesome, you have successfully set up a server that can communicate with the ChatGPT API and generate responses for your chatbot.  

This server can be used as a starting point for building your own chatbot or integrating ChatGPT into an existing chatbot. With a few modifications, you can customize the server to suit your specific needs and requirements.


