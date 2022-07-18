const Models = require("../../../models");

module.exports = class UpdateUserQuery {
  constructor(id, full_name, country_code) {
    this.details = {
      id,
      full_name,
      country_code,
    };
  }

  get() {
    return Models.User.update(
      {
        full_name: this.details.full_name,
        country_code: this.details.country_code,
      },
      {
        where: {
          id: this.details.id,
        },
      }
    );
  }
};
