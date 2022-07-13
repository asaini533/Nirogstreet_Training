const Models = require("../../../models");

module.exports = class UserInRoleQuery {
  constructor(roleId, limit, offset) {
    this.details = {
      roleId,
      limit,
      offset,
    };
  }

  async get() {
    let users = await Models.User.findAndCountAll({
      include: [{ model: Models.Roles, where: { id: this.details.roleId } }],
      limit: this.details.limit,
      offset: this.details.offset,
    });

    return users;
  }
};
