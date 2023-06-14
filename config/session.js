// const session = require("express-session");
// const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

module.exports = {
  nsme: "session_cityzens",
  secret: process.env.SESSION_SECRETKEY,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
  cookie: { expires: 1000 * 60 * 60 * 24 * 7 },
};
