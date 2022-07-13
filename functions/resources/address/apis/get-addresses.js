const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const GetAddressQuery = require("../query/get-addresses-query");
const { respond, logInfo, whenResult } = require("../../../lib");
const GetAddressValidation = require("../validators/get-address-validation");

async function get(req) {
  let userId = req.params.id;

  const validationResult = await GetAddressValidation.validate({ userId });

  let response = await whenResult(() => {
    return db.execute(new GetAddressQuery(userId));
  })(validationResult);

  return respond(
    response,
    "Address fetched Successfully",
    "something Went wrong"
  );
}

Route.withOutSecurity().noAuth().get("/users/:id/addresses", get).bind();

module.exports.get = get;
