require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  HOST: process.env.HOST || "http://127.0.0.1",
  NODE_ENV: process.env.NODE_ENV || "development",
};
