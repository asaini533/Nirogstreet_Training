const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const GetAadharQuery = require("../query/get-aadhar-query");
const {
  respond,
  logInfo,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const GetAadharValidation = require("../validators/get-aadhar-validation");

async function get(req) {
  let userId = req.params.id;

  let response = await composeResult(
    withArgs(db.execute, new GetAadharQuery(userId)),
    GetAadharValidation.validate
  )({ userId });

  return respond(
    response,
    "Aadhar fetched Successfully",
    "Something went wrong!"
  );
}

Route.withOutSecurity().noAuth().get("/users/:id/aadhar", get).bind();

module.exports.get = get;
