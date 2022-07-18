const Route = require("../../../route");
const db = require("../../../db/repository");
const UpdateAddressQuery = require("../query/update-address-query");
const {
  respond,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const UpdateAddressValidation = require("../validators/update-address-validation");

async function put(req) {
  let addId = req.params.addId;

  const { name, street, city, country } = req.body;

  let response = await composeResult(
    withArgs(
      db.execute,
      new UpdateAddressQuery(addId, name, street, city, country)
    ),
    UpdateAddressValidation.validate
  )({ addId, name, street, city, country });

  console.log(response);

  return respond(
    response,
    "Address updated Successfully",
    "Something went wrong"
  );
}

Route.withOutSecurity().noAuth().put("/users/:id/addresses/:addId", put).bind();

module.exports.put = put;
