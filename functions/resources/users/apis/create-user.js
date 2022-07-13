const Route = require("../../../route");
const db = require("../../../db/repository");
const uuid = require("uuid");
const CreateUserQuery = require("../query/create-user-query");
const { respond, logInfo, whenResult } = require("../../../lib");
const CreateUserValidation = require("../validators/create-user-validation");

async function post(req) {
  let { full_name, country_code } = req.body;
  let id = uuid.v1();

  const validationResult = await CreateUserValidation.validate({
    full_name,
    country_code,
  });

  let response = await whenResult(() => {
    return db.execute(new CreateUserQuery(id, full_name, country_code));
  })(validationResult);

  return respond(response, "User Created Successfully", "something Went wrong");
}

Route.withOutSecurity().noAuth().post("/users", post).bind();

module.exports.post = post;
