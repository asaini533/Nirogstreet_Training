const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  userId: [
    [notEmpty, "UserId is mandatory!"],
    [shouldBeUuid, "UserId should be an UUID!"],
  ],
  name: [[notEmpty, "Name is mandatory!"]],
  street: [[notEmpty, "Street is mandatory!"]],
  city: [[notEmpty, "City is mandatory!"]],
  country: [[notEmpty, "Country is mandatory!"]],
};

module.exports.validate = async (data) => validate(rule, data);
