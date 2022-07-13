const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  roleId: [
    [notEmpty, "Role Is id mandatory!"],
    [shouldBeUuid, "Role Id should be an UUID"],
  ],
};

module.exports.validate = async (data) => validate(rule, data);
