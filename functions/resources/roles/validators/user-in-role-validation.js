const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  roleId: [
    [notEmpty, "Role ID is mandatory!"],
    [shouldBeUuid, "Role Id should be an UUID!"],
  ],
};

module.exports.validate = async (data) => validate(rule, data);
