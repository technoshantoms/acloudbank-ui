const environment = process.env.NODE_ENV;

let EES_BASE_URL;
let REGISTRATION_SERVICE_BASE_URL;
let RECAPTCHA_KEY;
let DEFAULT_WS_NODE;
let WS_NODE_LIST_URL_NODE1;
let WS_NODE_LIST_URL_NODE2;
let WS_NODE_LIST_URL_NODE3;

if (environment === "development") {
    EES_BASE_URL = "http://localhost:3000";
    REGISTRATION_SERVICE_BASE_URL = "http://localhost:48887";
    // RECAPTCHA_KEY = "6Ldp0XQpAAAAAPkfUN6OUp4efAOyb3bnUy5ZC1yd";
    DEFAULT_WS_NODE = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE1 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE2 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE3 = "wss://wss.acloudbank.com";
} else if (environment === "production") {
    EES_BASE_URL = "http://localhost:3000";
    REGISTRATION_SERVICE_BASE_URL = "http://localhost:48887";
    // RECAPTCHA_KEY = "6Ldp0XQpAAAAAPkfUN6OUp4efAOyb3bnUy5ZC1yd";
    DEFAULT_WS_NODE = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE1 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE2 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE3 = "wss://wss.acloudbank.com";
}

export {
    EES_BASE_URL,
    REGISTRATION_SERVICE_BASE_URL,
    // RECAPTCHA_KEY,
    DEFAULT_WS_NODE,
    WS_NODE_LIST_URL_NODE1,
    WS_NODE_LIST_URL_NODE2,
    WS_NODE_LIST_URL_NODE3
};
