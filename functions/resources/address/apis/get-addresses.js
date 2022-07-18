const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const GetAddressQuery = require("../query/get-addresses-query");
const {
  respond,
  logInfo,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const GetAddressValidation = require("../validators/get-address-validation");

async function get(req) {
  let userId = req.params.id;

  let response = await composeResult(
    withArgs(db.execute, new GetAddressQuery(userId)),
    GetAddressValidation.validate
  )({ userId });

  return respond(
    response,
    "Address fetched Successfully",
    "something Went wrong"
  );
}

Route.withOutSecurity().noAuth().get("/users/:id/addresses", get).bind();

module.exports.get = get;
