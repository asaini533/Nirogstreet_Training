const Models = require("../../../models");

module.exports = class GetSpecificUsersQuery {
  constructor(userId) {
    this.details = {
      userId,
    };
  }

  get() {
    return Models.User.findOne({
      where: { id: this.details.userId },
      include: ["Roles"],
    });
  }
};
