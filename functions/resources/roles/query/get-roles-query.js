const Models = require("../../../models");

module.exports = class GetRolesQuery {
  constructor() {}

  async get() {
    return Models.Roles.findAll();
  }
};
