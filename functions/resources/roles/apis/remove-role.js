const Route = require("../../../route");
const db = require("../../../db/repository");
const RemoveRoleQuery = require("../query//remove-role-query");
const {
  respond,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const RemoveRoleValidation = require("../validators/remove-role-validation");

async function remove(req) {
  let userId = req.params.id;
  let roleId = req.params.rid;

  let response = await composeResult(
    withArgs(db.execute, new RemoveRoleQuery(userId, roleId)),
    RemoveRoleValidation.validate
  )({ userId, roleId });

  return respond(response, "Role removed successfully", "Something went wrong");
}

Route.withOutSecurity().noAuth().delete("/users/:id/roles/:rid", remove).bind();

module.exports.delete = remove;
