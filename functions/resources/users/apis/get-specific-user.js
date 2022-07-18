const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const GetSpecificUserQuery = require("../query/get-specific-user-query");
const {
  respond,
  logInfo,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const GetSpecificUserValidation = require("../validators/get-specific-user-validation");

async function get(req) {
  let userId = req.params.id;

  let response = await composeResult(
    withArgs(db.execute, new GetSpecificUserQuery(userId)),
    GetSpecificUserValidation.validate
  )({ userId });

  return respond(response, "User fetched successfully", "something Went wrong");
}

Route.withOutSecurity().noAuth().get("/users/:id", get).bind();

module.exports.get = get;
