const Route = require("../../../route");
const db = require("../../../db/repository");
const UserInRoleQuery = require("../query/user-in-role-query");
const { respond, whenResult } = require("../../../lib");
const UserInRoleValidation = require("../validators/user-in-role-validation");

async function get(req) {
  //   let userId = req.params.id;
  let roleId = req.params.rid;

  const validationResult = await UserInRoleValidation.validate({ roleId });

  let response = await whenResult(() => {
    return db.execute(new UserInRoleQuery(roleId, 5, 1));
  })(validationResult);

  return respond(
    response,
    "Users in a role fetched successfully",
    "Something went wrong"
  );
}

Route.withOutSecurity().noAuth().get("/users/roles/:rid", get).bind();

module.exports.get = get;
