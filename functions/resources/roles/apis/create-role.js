const Route = require("../../../route");
const db = require("../../../db/repository");
const CreateRoleQuery = require("../query/create-role-query");
const { respond, whenResult } = require("../../../lib");
const CreateRoleValidation = require("../validators/create-role-validation");

async function post(req) {
  let userId = req.params.id;
  let roleId = req.params.rid;

  const validationResult = await CreateRoleValidation.validate({
    userId,
    roleId,
  });

  let response = await whenResult(() => {
    return db.execute(new CreateRoleQuery(userId, roleId));
  })(validationResult);

  return respond(
    response,
    "Role assigned successfully",
    "Something went wrong"
  );
}

Route.withOutSecurity().noAuth().post("/users/:id/roles/:rid", post).bind();

module.exports.post = post;
