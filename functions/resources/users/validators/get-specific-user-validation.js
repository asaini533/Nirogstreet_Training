const { validate, shouldBeUuid, notEmpty } = require("../../../validation");

const rule = {
  userId: [
    [notEmpty, "User Id is mandatory!"],
    [shouldBeUuid, "User Id should be an UUID!"],
  ],
};

module.exports.validate = async (data) => validate(rule, data);
