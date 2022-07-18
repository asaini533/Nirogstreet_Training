const Models = require("../../../models");

module.exports = class GetAllUsersQuery {
  constructor() {}

  get() {
    return Models.User.findAll();
  }
};
