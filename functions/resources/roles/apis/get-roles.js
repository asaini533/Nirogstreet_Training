const Route = require("../../../route");
const db = require("../../../db/repository");
const GetRolesQuery = require("../query/get-roles-query");
const { respond } = require("../../../lib");

async function get() {
  let response = await db.execute(new GetRolesQuery());

  return respond(response, "All roles fetched", "Something Went Wrong");
}

Route.withOutSecurity().noAuth().get("/roles", get).bind();

module.exports.get = get;
