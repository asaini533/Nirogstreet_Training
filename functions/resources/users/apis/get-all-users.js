const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const GetAllUsersQuery = require("../query/get-all-users-query");
const { respond, logInfo, composeResult, withArgs } = require("../../../lib");

async function get(req) {
  let response = await composeResult(
    withArgs(db.execute, new GetAllUsersQuery())
  )();

  return respond(
    response,
    "Fetched User details succesfully",
    "something Went wrong"
  );
}

Route.withOutSecurity().noAuth().get("/users", get).bind();

module.exports.get = get;
