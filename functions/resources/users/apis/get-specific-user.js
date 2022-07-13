const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const GetSpecificUserQuery = require("../query/get-specific-user-query");
const { respond, logInfo, whenResult } = require("../../../lib");
const GetSpecificUserValidation = require("../validators/get-specific-user-validation");

async function get(req) {
  let userId = req.params.id;

  const validationResult = await GetSpecificUserValidation.validate({ userId });

  let response = await whenResult(() => {
    return db.execute(new GetSpecificUserQuery(userId));
  })(validationResult);
  
  return respond(response, "User fetched successfully", "something Went wrong");
}

Route.withOutSecurity().noAuth().get("/users/:id", get).bind();

module.exports.get = get;
