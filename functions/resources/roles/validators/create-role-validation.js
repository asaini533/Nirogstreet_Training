const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  userId: [
    [notEmpty, "User ID is mandatory!"],
    [shouldBeUuid, "User ID should be an UUID!"],
  ],
  roleId: [
    [notEmpty, "Role ID is mandatory!"],
    [shouldBeUuid, "Role Id should be an UUID!"],
  ],
};

module.exports.validate = async (data) => validate(rule, data);
