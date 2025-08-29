import {Apis} from "bitsharesjs-ws";
/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    const testnet =
        "0d53cb60efcef7ba837d6733c8b3cb3c30b85e5e9d5b6296e8f9d4c7e23bfe90"; // just for the record
    const mainnet =
        "0d53cb60efcef7ba837d6733c8b3cb3c30b85e5e9d5b6296e8f9d4c7e23bfe90";

    // treat every other chain as testnet
    return Apis.instance().chain_id !== mainnet;
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "AcloudBank";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://ex.xbts.io";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet.xbts.io", // 2017-12-infrastructure worker proposal
        show: false,
        editable: false,
        referrer: "xbtsx"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "https://testnet-faucet.xbts.io", // operated as a contribution by BitShares EU
        show: true,
        editable: true
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ico-blue.png").default;
    //return require("assets/logo-year.png");
}

export function getLogoSmall() {
    return require("assets/logo-small.png");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "lightTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return [
        "KES",
        "USD",
        "CNY",
        "BTC",
        "EUR",
        "XBTSX.USDT",
        "XBTSX.BTC",
        "XBTSX.RUB",
        "USD"
    ];
}

export function getDefaultMarket() {
    if (_isTestnet()) {
        return "USD_TEST";
    }
    return "KES_USD";
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */
export function getMyMarketsBases() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["KES", "EUR", "CNY", "USD"];
}

export function getListingCoins() {
    return [
        //soon: true, (for TON example)
        {
            name: "The 2027 Presidential candidate",
            active: "yes",
            ticker: "USD",
            page: "https://homepesa.com/",
            account: "nathan",
            goal: 3000000,
            votes: 0
        },
        {
            name: "Kennedy Ventures",
            active: "yes",
            ticker: "USD",
            page: "https://homepesa.com/",
            account: "dennis",
            goal: 10000,
            votes: 0
        },
        {
            name: "Dennis K. Satia",
            active: "yes",
            ticker: "USD",
            page: "https://web.acloudbank.com/",
            account: "purity",
            goal: 28000,
            votes: 0
        }
    ];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    let tokens = {
        nativeTokens: [
            "BTC",
            //"BTC1.0",
            "KES",
            "CNY",
            //"CNY1.0",
            "EUR",
            //"EUR1.0",
            "GOLD",
            //"GOLD1.0",
            "RUBLE",
            //"RUB1.0",
            "SILVER",
            //"SILVER1.0",
            "USD"
            //"USD1.0"
        ],

        gdexTokens: ["GDEX.BTC", "GDEX.EOS", "GDEX.ETH", "GDEX.USDT"],
        openledgerTokens: [],
        /*
        piratecashTockens: [
            "PIRATE.PIRATE",
            "PIRATE.BTC",
            "PIRATE.LTC",
            "PIRATE.BCC",
            "PIRATE.DOGE",
            "PIRATE.COSA"
        ],

         */
        xbtsxTokens: [
            "USD",
            "XBTSX.POST",
            "XBTSX.DOGE",
            "XBTSX.BTC",
            "XBTSX.LTC",
            "XBTSX.DASH",
            "XBTSX.BTG",
            "XBTSX.NVC",
            "XBTSX.42",
            "XBTSX.NMC",
            "XBTSX.WAVES",
            "XBTSX.ETH",
            "XBTSX.ONION",
            "XBTSX.EGC",
            "XBTSX.BCH",
            "XBTSX.MDL",
            "XBTSX.SKY",
            "XBTSX.GRS",
            "XBTSX.XBB",
            "XBTSX.EXR",
            "XBTSX.AXAI",
            "XBTSX.USDT",
            "XBTSX.RVN",
            "XBTSX.TRD",
            "XBTSX.SCH",
            "XBTSX.EOS",
            "XBTSX.RUB",
            "XBTSX.USD",
            "XBTSX.EUR",
            "XBTSX.VTC",
            "XBTSX.USDC",
            "XBTSX.BAT",
            "XBTSX.ATRI",
            "XBTSX.BNB",
            "XBTSX.TRX",
            "XBTSX.HT",
            "XBTSX.XRP",
            "XBTSX.HIVE",
            "XBTSX.EMC",
            "XBTSX.NESS",
            "XBTSX.PPC",
            "XBTSX.SHIB",
            "XBTSX.HBD",
            "XBTSX.PIVX",
            "XBTSX.AVAX",
            "XBTSX.RTM",
            "XBTSX.XAUT",
            "XBTSX.MATIC",
            "XBTSX.HVQ",
            "XBTSX.TCG",
            "XBTSX.NCH",
            "XBTSX.LUNR",
            "XBTSX.RDD",
            "XBTSX.BSV",
            "XBTSX.MANA",
            "XBTSX.AUR",
            "XBTSX.ETC",
            "XBTSX.ASIC",
            "XBTSX.VITE",
            "XBTSX.GODS",
            "XBTSX.FLUX",
            "XBTSX.ZEC",
            "XBTSX.QTUM",
            "XBTSX.ZIL",
            "XBTSX.KMD",
            "XBTSX.XCCX",
            "XBTSX.PEPE",
            "XBTSX.RXD",
            "XBTSX.HERO",
            "XBTSX.DAI",
            "XBTSX.WRAM",
            "XBTSX.TON",
            "XBTSX.DPR",
            "XBTSX.XCH",
            "XBTSX.PEP",
            "XBTSX.A",
            "XBTSX.AEUR"
        ],
        /*
        honestTokens: [
            "HONEST",
            "HONEST.MONEY",
            "HONEST.AGORISM",
            "HONEST.DEV",
            "HONEST.CNY",
            "HONEST.USD",
            "HONEST.BTC",
            "HONEST.XAU",
            "HONEST.XAG",
            "HONEST.ETH",
            "HONEST.XRP",
            "HONEST.XRP1",
            "HONEST.ETH1",
            "HONEST.USDSHORT",
            "HONEST.BTCSHORT",
            "HONEST.ADA",
            "HONEST.DOT",
            "HONEST.LTC",
            "HONEST.SOL",
            "HONEST.XMR",
            "HONEST.ATOM",
            "HONEST.XLM",
            "HONEST.ALGO",
            "HONEST.FIL",
            "HONEST.EOS",
            "HONEST.RUB",
            "HONEST.EUR",
            "HONEST.GBP",
            "HONEST.JPY",
            "HONEST.KRW",
            "HONEST.ADASHORT",
            "HONEST.DOTSHORT",
            "HONEST.LTCSHORT",
            "HONEST.SOLSHORT",
            "HONEST.XMRSHORT",
            "HONEST.ATOMSHORT",
            "HONEST.XLMSHORT",
            "HONEST.ALGOSHORT",
            "HONEST.FILSHORT",
            "HONEST.EOSSHORT",
            "HONEST.RUBSHORT",
            "HONEST.EURSHORT",
            "HONEST.GBPSHORT",
            "HONEST.JPYSHORT",
            "HONEST.KRWSHORT",
            "HONEST.XRPSHORT",
            "HONEST.ETHSHORT",
            "HONEST.XAUSHORT",
            "HONEST.XAGSHORT",
            "HONEST.CNYSHORT"
        ],
        */
        /*
        ioxbankTokens: ["IOB.XRP", "IOB.XLM"],
         */

        otherTokens: [
            "CVCOIN",
            "HERO",
            "OCT",
            "HERTZ",
            "YOYOW",
            "EVRAZ",
            "BEOS",
            "TWENTIX",
            "BTWTY",
            "DEFI",
            "QUINT"
        ]
    };

    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    if (_isTestnet()) {
        return [["USD", "TEST"]];
    }
    return [
        ["USD", "KES"],
        ["XBTSX.BTC", "KES"],
        ["XBTSX.BTC", "USDT"],
        ["USD", "KES"],
        ["USD", "GOLD"],
        ["USD", "HERO"],
        ["USD", "HONEST.BTC"],
        ["USD", "HONEST.USD"],
        ["USD", "HONEST.BTCSHORT"],
        ["USD", "HONEST.USDSHORT"],
        ["USD", "HERTZ"],
        ["USD", "URTHR"],
        ["USD", "SKULD"],
        ["USD", "VERTHANDI"],
        ["CNY", "KES"],
        ["CNY", "USD"],
        ["CNY", "YOYOW"],
        ["CNY", "OCT"],
        ["CNY", "HONEST.BTC"],
        ["CNY", "HONEST.USD"],
        ["CNY", "HONEST.BTCSHORT"],
        ["CNY", "HONEST.USDSHORT"],
        ["CNY", "HONEST.CNY"],
        ["CNY", "HERTZ"],
        ["CNY", "URTHR"],
        ["CNY", "SKULD"],
        ["CNY", "VERTHANDI"],
        ["KES", "RUBLE"],
        ["KES", "HERO"],
        ["KES", "OCT"],
        ["KES", "SILVER"],
        ["KES", "GOLD"],
        ["KES", "XBTSX.BTC"],
        ["KES", "XBTSX.ETH"],
        ["KES", "XBTSX.EUR"],
        ["KES", "XBTSX.RUB"],
        ["KES", "USD"],
        ["KES", "XBTSX.WAVES"],
        ["KES", "XBTSX.USD"],
        ["KES", "XBTSX.USDC"],
        ["KES", "XBTSX.USDN"],
        ["KES", "XBTSX.USDT"],
        ["KES", "HONEST"],
        ["KES", "HONEST.MONEY"],
        ["KES", "HONEST.AGORISM"],
        ["KES", "HONEST.DEV"],
        ["KES", "HONEST.CNY"],
        ["KES", "HONEST.USD"],
        ["KES", "HONEST.BTC"],
        ["KES", "HONEST.XAU"],
        ["KES", "HONEST.XAG"],
        ["KES", "HONEST.ETH"],
        ["KES", "HONEST.XRP"],
        ["KES", "HONEST.XRP1"],
        ["KES", "HONEST.ETH1"],
        ["KES", "HONEST.USDSHORT"],
        ["KES", "HONEST.BTCSHORT"],
        ["KES", "HONEST.ADA"],
        ["KES", "HONEST.DOT"],
        ["KES", "HONEST.LTC"],
        ["KES", "HONEST.SOL"],
        ["KES", "HONEST.XMR"],
        ["KES", "HONEST.ATOM"],
        ["KES", "HONEST.XLM"],
        ["KES", "HONEST.ALGO"],
        ["KES", "HONEST.FIL"],
        ["KES", "HONEST.EOS"],
        ["KES", "HONEST.RUB"],
        ["KES", "HONEST.EUR"],
        ["KES", "HONEST.GBP"],
        ["KES", "HONEST.JPY"],
        ["KES", "HONEST.KRW"],
        ["KES", "HONEST.ADASHORT"],
        ["KES", "HONEST.DOTSHORT"],
        ["KES", "HONEST.LTCSHORT"],
        ["KES", "HONEST.SOLSHORT"],
        ["KES", "HONEST.XMRSHORT"],
        ["KES", "HONEST.ATOMSHORT"],
        ["KES", "HONEST.XLMSHORT"],
        ["KES", "HONEST.ALGOSHORT"],
        ["KES", "HONEST.FILSHORT"],
        ["KES", "HONEST.EOSSHORT"],
        ["KES", "HONEST.RUBSHORT"],
        ["KES", "HONEST.EURSHORT"],
        ["KES", "HONEST.GBPSHORT"],
        ["KES", "HONEST.JPYSHORT"],
        ["KES", "HONEST.KRWSHORT"],
        ["KES", "HONEST.XRPSHORT"],
        ["KES", "HONEST.ETHSHORT"],
        ["KES", "HONEST.XAUSHORT"],
        ["KES", "HONEST.XAGSHORT"],
        ["KES", "HONEST.CNYSHORT"],
        ["KES", "IOB.XRP"],
        ["KES", "IOB.XLM"],
        ["KES", "HERTZ"],
        ["KES", "URTHR"],
        ["KES", "SKULD"],
        ["KES", "VERTHANDI"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    if (_isTestnet()) {
        return [];
    }
    return ["XBTSX.", "HONEST.", "IOB."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "XBTSX.", "bit"
    return ["XBTSX."];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    const allowedGateways = ["XBTSX", "ETH", "BSC", "EOS", "WAVES"]; //  , "PIRATE", "IOB"
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = "TEST";
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the BitShares UI placed under bitshares.org."
    };
}

export function getHiveNewsTag() {
    return "xbts";
}
