const { validate, notEmpty, shouldBeUuid } = require("../../../validation");

const rule = {
  addId: [
    [notEmpty, "Address Id is mandatory!"],
    [shouldBeUuid, "Address Id should be an UUID!"],
  ],
  name: [[notEmpty, "Name is mandatory!"]],
  street: [[notEmpty, "Street is mandatory!"]],
  city: [[notEmpty, "City is mandatory!"]],
  country: [[notEmpty, "Country is mandatory!"]],
};

module.exports.validate = async (data) => validate(rule, data);
