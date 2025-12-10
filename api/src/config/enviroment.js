import dotenv from "dotenv";
import __dirname from "./___dirname.js";
import path from "path";

//dotenv config
dotenv.config({path:path.join(__dirname, "../.env.dev")})

//enviroment object
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
const FRONT_END = process.env.FRONT_END

const envObject = {
  server: {
    port: PORT
  },
  mongo: {
    url: MONGO_URL
  },
  accessjwt: {
    key: ACCESS_TOKEN_KEY
  },
  refreshjwt: {
    key: REFRESH_TOKEN_KEY
  },
  client: FRONT_END

};

export {envObject};