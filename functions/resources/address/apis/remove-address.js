const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const RemoveAddressQuery = require("../query/remove-address-query");
const {
  respond,
  logInfo,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const RemoveAddressValidation = require("../validators/remove-address-validation");

async function remove(req) {
  let userId = req.params.id;
  let addressId = req.params.addId;

  let response = await composeResult(
    withArgs(db.execute, new RemoveAddressQuery(userId, addressId)),
    RemoveAddressValidation.validate
  )({ userId, addressId });

  return respond(
    response,
    "Address Removed Successfully",
    "something Went wrong"
  );
}

Route.withOutSecurity()
  .noAuth()
  .delete("/users/:id/addresses/:addId", remove)
  .bind();

module.exports.delete = remove;
