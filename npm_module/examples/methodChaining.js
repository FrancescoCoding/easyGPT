// ? easyGPT uses the builder pattern meaning that you can chain multiple methods.

import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

(new EasyGpt())
    .setApiKey(process.env.API_KEY)
    .addMessage("ChatGPT sing for me!")
    .advanced.setTemperature(1.2)
    .advanced.setMaxTokens(200)
    .ask()
    .then(r => 
        console.log(r.content)    
    );

