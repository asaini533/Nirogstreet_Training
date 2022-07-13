const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const RemoveAddressQuery = require("../query/remove-address-query");
const { respond, logInfo, whenResult } = require("../../../lib");
const RemoveAddressValidation = require("../validators/remove-address-validation");

async function remove(req) {
  let userId = req.params.id;
  let addressId = req.params.addId;

  const validationResult = await RemoveAddressValidation.validate({
    userId,
    addressId,
  });

  let response = await whenResult(() => {
    return db.execute(new RemoveAddressQuery(userId, addressId));
  })(validationResult);

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
