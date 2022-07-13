const Models = require("../../../models");

module.exports = class CreateUserQuery {
  constructor(id, full_name, country_code) {
    this.details = {
      id,
      full_name,
      country_code,
    };
  }

  get() {
    return Models.User.create({
      id: this.details.id,
      full_name: this.details.full_name,
      country_code: this.details.country_code,
    });
  }
};
