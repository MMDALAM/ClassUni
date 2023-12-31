const express = require("express");
const app = express();
const http = require("http");
const cookieParser = require("cookie-parser");
const { body } = require("express-validator");
const session = require("express-session");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passport = require("passport");
const Helpers = require("./Helpers");

module.exports = class Application {
  constructor() {
    this.setupExpress();
    this.setMongoConnection();
    this.setConfig();
    this.setRouters();
  }

  setupExpress() {
    const server = http.createServer(app);
    server.listen(config.port, () =>
      console.log(`Listening on port ${config.port}`)
    );
  }

  setMongoConnection() {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }

  setConfig() {
    require("app/passport/passport-local");

    app.use(express.static(config.layout.public_dir));
    app.set("view engine", config.layout.view_engine);
    app.set("views", config.layout.view_dir);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(body());

    app.use(session({ ...config.session }));

    app.use(cookieParser(config.cookie_secretkey));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
      app.locals = new Helpers(req, res).getObjects();
      next();
    });
  }

  setRouters() {
    app.use(require("app/routes/web"));
  }
};
