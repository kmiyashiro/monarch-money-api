// session.js
import { ENV_TOKEN_KEY } from "./constants.js";

let headers = {
  "Client-Platform": "web",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
};

const env = process?.env ?? env ?? {};

// Try to load token from environment variable, rather than from session file.
if (env[ENV_TOKEN_KEY]) {
  headers["Authorization"] = `Token ${env[ENV_TOKEN_KEY]}`;
  console.log("Loaded token from environment variable." + env[ENV_TOKEN_KEY]);
}
let token = null;

export const setToken = (newToken) => {
  token = newToken;
  headers["Authorization"] = `Token ${newToken}`;
  console.log("Set token");
};

export const getHeaders = () => headers;
export const getToken = () => token;
