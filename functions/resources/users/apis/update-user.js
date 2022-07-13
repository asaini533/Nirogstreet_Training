const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const UpdateUserQuery = require("../query/update-user-query");
const { respond, logInfo, whenResult } = require("../../../lib");
const UpdateUserValidation = require("../validators/update-user-validation");

async function put(req) {
  let userId = req.params.id;

  let { full_name, country_code } = req.body;

  const validationResult = await UpdateUserValidation.validate({
    full_name,
    country_code,
  });

  let response = await whenResult(() => {
    return db.execute(new UpdateUserQuery(userId, full_name, country_code));
  })(validationResult);
  
  return respond(response, "User updated successfully", "something Went wrong");
}

Route.withOutSecurity().noAuth().put("/users/:id", put).bind();

module.exports.put = put;
