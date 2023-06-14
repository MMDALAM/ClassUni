const autoBind = require("auto-bind");

module.exports = class Validators {
  constructor() {
    autoBind(this);
  }
};
