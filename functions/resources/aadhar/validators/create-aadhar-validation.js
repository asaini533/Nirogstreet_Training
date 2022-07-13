const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  userId: [
    [notEmpty, "UserId is mandatory!"],
    [shouldBeUuid, "UserId should be an UUID!"],
  ],
  name: [[notEmpty, "Name is mandatory!"]],
};

module.exports.validate = async (data) => validate(rule, data);
