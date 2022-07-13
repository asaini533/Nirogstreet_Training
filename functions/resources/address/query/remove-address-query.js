const Models = require("../../../models");

module.exports = class RemoveAddressQuery {
  constructor(userId, addressId) {
    this.details = {
      userId,
      addressId,
    };
  }
  async get() {
    let user = await Models.User.findOne({
      where: {
        id: this.details.userId,
      },
    });
    let address = await Models.Addresses.findOne({
      where: {
        id: this.details.addressId,
      },
    });

    await user.removeAddresses(address);
    return user.getAddresses();
  }
};
