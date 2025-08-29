const environment = process.env.NODE_ENV;

let EES_BASE_URL;
let REGISTRATION_SERVICE_BASE_URL;
//let RECAPTCHA_KEY;
let DEFAULT_WS_NODE;
let WS_NODE_LIST_URL_NODE1;
let WS_NODE_LIST_URL_NODE2;
let WS_NODE_LIST_URL_NODE3;

if (environment === "development") {
    EES_BASE_URL = "https://agent.acloudbank.com";
    REGISTRATION_SERVICE_BASE_URL = "https://registra.acloudbank.com";
     //RECAPTCHA_KEY = "6LdfqrIrAAAAAEi66M3VxRrGGgFkDBM9Ld6h4R2K";
    DEFAULT_WS_NODE = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE1 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE2 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE3 = "wss://wss.acloudbank.com";
} else if (environment === "production") {
    EES_BASE_URL = "https://agent.acloudbank.com";
    REGISTRATION_SERVICE_BASE_URL = "https://registra.acloudbank.com";
     //RECAPTCHA_KEY = "6LdfqrIrAAAAAEi66M3VxRrGGgFkDBM9Ld6h4R2K";
    DEFAULT_WS_NODE = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE1 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE2 = "wss://wss.acloudbank.com";
    WS_NODE_LIST_URL_NODE3 = "wss://wss.acloudbank.com";
}

export {
    EES_BASE_URL,
    REGISTRATION_SERVICE_BASE_URL,
     //RECAPTCHA_KEY,
    DEFAULT_WS_NODE,
    WS_NODE_LIST_URL_NODE1,
    WS_NODE_LIST_URL_NODE2,
    WS_NODE_LIST_URL_NODE3
};

