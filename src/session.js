// session.js
import { ENV_TOKEN_KEY } from "./constants.js";

let headers = {
  "Client-Platform": "web",
};

// Try to load token from environment variable, rather than from session file.
if (process.env[ENV_TOKEN_KEY]) {
  headers["Authorization"] = `Token ${process.env[ENV_TOKEN_KEY]}`;
  console.log(
    "Loaded token from environment variable." + process.env[ENV_TOKEN_KEY]
  );
}
let token = null;

export const setToken = (newToken) => {
  token = newToken;
  headers["Authorization"] = `Token ${newToken}`;
  console.log("Set token");
};

export const getHeaders = () => headers;
export const getToken = () => token;
