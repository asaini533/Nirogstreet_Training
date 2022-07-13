const Models = require("../../../models");

module.exports = class CreateAddressQuery {
  constructor(userId, name, street, city, country) {
    this.details = {
      userId,
      name,
      street,
      city,
      country,
    };
  }
  async get() {
    let user = await Models.User.findOne({
      where: {
        id: this.details.userId,
      },
    });
    console.log("user", user);
    let address = await Models.Addresses.create({
      name: this.details.name,
      street: this.details.street,
      city: this.details.city,
      country: this.details.country,
    });
    return user.createAddress({
      name: this.details.name,
      street: this.details.street,
      city: this.details.city,
      country: this.details.country,
    });
    // return user.addAddresses(address);
  }
};
