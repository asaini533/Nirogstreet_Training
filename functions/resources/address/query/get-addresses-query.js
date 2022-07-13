const Models = require("../../../models");

module.exports = class GetAddressQuery {
  constructor(userId) {
    this.details = {
      userId,
    };
  }
  async get() {
    let user = await Models.User.findOne({
      where: {
        id: this.details.userId,
      },
    });
    console.log("user", await user.countAddresses());

    return user.getAddresses();
  }
};
