const Route = require("../../../route");
const db = require("../../../db/repository");
const CreateRoleQuery = require("../query/create-role-query");
const {
  respond,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const CreateRoleValidation = require("../validators/create-role-validation");

async function post(req) {
  let userId = req.params.id;
  let roleId = req.params.rid;

  let response = await composeResult(
    withArgs(db.execute, new CreateRoleQuery(userId, roleId)),
    CreateRoleValidation.validate
  )({ userId, roleId });

  return respond(
    response,
    "Role assigned successfully",
    "Something went wrong"
  );
}

Route.withOutSecurity().noAuth().post("/users/:id/roles/:rid", post).bind();

module.exports.post = post;
