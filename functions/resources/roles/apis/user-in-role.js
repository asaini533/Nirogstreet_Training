const Route = require("../../../route");
const db = require("../../../db/repository");
const UserInRoleQuery = require("../query/user-in-role-query");
const {
  respond,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const UserInRoleValidation = require("../validators/user-in-role-validation");

async function get(req) {
  //   let userId = req.params.id;
  let roleId = req.params.rid;

  let response = await composeResult(
    withArgs(db.execute, new UserInRoleQuery(roleId, 5, 0)),
    UserInRoleValidation.validate
  )({ roleId });

  return respond(
    response,
    "Users in a role fetched successfully",
    "Something went wrong"
  );
}

Route.withOutSecurity().noAuth().get("/users/roles/:rid", get).bind();

module.exports.get = get;
