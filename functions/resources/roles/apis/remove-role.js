const Route = require("../../../route");
const db = require("../../../db/repository");
const RemoveRoleQuery = require("../query//remove-role-query");
const { respond, whenResult } = require("../../../lib");
const RemoveRoleValidation = require("../validators/remove-role-validation");

async function remove(req) {
  let userId = req.params.id;
  let roleId = req.params.rid;

  const validationResult = await RemoveRoleValidation.validate({
    userId,
    roleId,
  });

  let response = await whenResult(() => {
    return db.execute(new RemoveRoleQuery(userId, roleId));
  })(validationResult);
  

  return respond(response, "Role removed successfully", "Something went wrong");
}

Route.withOutSecurity().noAuth().delete("/users/:id/roles/:rid", remove).bind();

module.exports.delete = remove;
