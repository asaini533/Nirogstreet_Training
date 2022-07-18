const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  userId: [
    [notEmpty, "User Id is mandatory!"],
    [shouldBeUuid, "User Id should be an UUID!"],
  ],
  addressId: [
    [notEmpty, "Address Id is mandatory!"],
    [shouldBeUuid, "Address ID should be an UUID!"],
  ],
};

module.exports.validate = async (data) => validate(rule, data);
