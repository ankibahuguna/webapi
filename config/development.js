module.exports = {

    PORT: process.env.PORT || 3000,

    DB_CONFIG: {

        MONGO: {
            URI: process.env.MONGO_URI || "mongodb://localhost/cuapp_live",
            port: 27017,
            DEBUG: process.env.MONGOOSE_DEBUG || true,
        },
    },
    AUTH_URL: process.env.AUTH_URL || "https://devcuservices.paycuapp.com/",
    get  AUTH_TOKEN_CHECK_URL() {
        return `${this.AUTH_URL} validateDeviceJwt`;
    },
    SSL_CONFIG: {
        cert: "",
        key: "",
        ca: "",
    },
};
