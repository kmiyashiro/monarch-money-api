// constants.js

export const ENV_TOKEN_KEY = "MONARCH_TOKEN"
export const AUTH_HEADER_KEY = "Authorization";
export const CSRF_KEY = "csrftoken";
export const DEFAULT_RECORD_LIMIT = 100;
export const ERRORS_KEY = "error_code";
export const BASE_URL = "https://api.monarchmoney.com"
export const GQL_ENDPOINT = `${BASE_URL}/graphql`;

export const MonarchMoneyEndpoints = {

    getLoginEndpoint() {
        return `${BASE_URL}/auth/login/`;
    },

    getGraphQL() {
        return `${BASE_URL}/graphql`;
    },

    getAccountBalanceHistoryUploadEndpoint() {
        return `${BASE_URL}/account-balance-history/upload/`;
    }
};
