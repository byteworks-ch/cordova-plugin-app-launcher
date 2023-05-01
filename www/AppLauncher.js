var appLauncher = {
    checkUrl: function(urlScheme, successCallback, errorCallback) {
        urlScheme = (urlScheme||"").trim();
        if (!urlScheme) {
            errorCallback("Invalid url scheme")
            return;
        }

        cordova.exec(
            successCallback,
            errorCallback,
            "AppLauncher",
            "openUrl",
            [urlScheme]
        );
    },

    openUrl: function(url, successCallback, errorCallback) {
        url = (url||"").trim();
        if (!url) {
            errorCallback("Invalid url")
            return;
        }

        cordova.exec(
            successCallback,
            errorCallback,
            "AppLauncher",
            "openUrl",
            [url]
        );
    }
    
};

module.exports = appLauncher;
