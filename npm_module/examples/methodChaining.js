// ? easyGPT uses the builder pattern meaning that you can chain multiple methods.

import EasyGpt from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

(new EasyGpt())
    .setApiKey(process.env.API_KEY)
    .addMessage("Hello ChatGPT!")
    .ask()
    .then(r => 
        console.log(r.content)    
    );

