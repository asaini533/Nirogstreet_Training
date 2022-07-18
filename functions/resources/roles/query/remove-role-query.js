const Models = require("../../../models");

module.exports = class RemoveRoleQuery {
  constructor(userId, roleId) {
    this.details = {
      userId,
      roleId,
    };
  }

  async get() {
    let user = await Models.User.findOne({
      where: { id: this.details.userId },
    });

    let role = await Models.Roles.findOne({
      where: { id: this.details.roleId },
    });

    await user.removeRoles(role);

    return user.getRoles();
  }
};
