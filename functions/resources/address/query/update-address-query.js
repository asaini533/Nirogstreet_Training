const Models = require("../../../models");

module.exports = class UpdateAddressQuery {
  constructor(addId, name, street, city, country) {
    this.details = {
      addId,
      name,
      street,
      city,
      country,
    };
  }

  async get() {
    return Models.Addresses.update(
      {
        name: this.details.name,
        street: this.details.street,
        city: this.details.city,
        country: this.details.country,
      },
      {
        where: { id: this.details.addId },
      }
    );
  }
};
