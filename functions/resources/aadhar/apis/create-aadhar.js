const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const CreateAadharQuery = require("../query/create-aadhar-query");
const {
  respond,
  logInfo,
  whenResult,
  composeResult,
  withArgs,
} = require("../../../lib");
const CreateAadharValidation = require("../validators/create-aadhar-validation");

async function post(req) {
  let userId = req.params.id;
  let aadharNumber = new Date().valueOf();
  let { name } = req.body;

  const validationResult = await CreateAadharValidation.validate({
    userId,
    name,
  });

  let response = await composeResult(
    withArgs(db.execute, new CreateAadharQuery(userId, name, aadharNumber)),
    CreateAadharValidation.validate
  )({ userId, name });

  return respond(
    response,
    "Aadhar Created Successfully",
    "something Went wrong"
  );
}

Route.withOutSecurity().noAuth().post("/users/:id/aadhar", post).bind();

module.exports.post = post;
