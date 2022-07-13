const { validate, notEmpty, numeric } = require("../../../validation");

const rule = {
  full_name: [[notEmpty, "Name is mandatory!"]],
  country_code: [
    [notEmpty, "Country Code is mandatory!"],
    [numeric, "Country Code should be a numeric value!"],
  ],
};

module.exports.validate = async (data) => validate(rule, data);
