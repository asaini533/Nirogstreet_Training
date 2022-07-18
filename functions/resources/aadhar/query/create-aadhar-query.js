const Models = require("../../../models");

module.exports = class CreateAadharQuery {
  constructor(userId, name, aadharNumber) {
    this.details = {
      userId,
      name,
      aadharNumber,
    };
  }

  async get() {
    let user = await Models.User.findOne({
      where: {
        id: this.details.userId,
      },
    });

    return user.createAadhar({
      name: this.details.name,
      aadharNumber: this.details.aadharNumber,
    });
  }
};
