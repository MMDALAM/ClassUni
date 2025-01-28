const autoBind = require("auto-bind-inheritance");

module.exports = class Validators {
  constructor() {
    autoBind(this);
  }
};
