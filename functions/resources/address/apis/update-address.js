const Route = require("../../../route");
const db = require("../../../db/repository");
const UpdateAddressQuery = require("../query/update-address-query");
const { respond, whenResult } = require("../../../lib");
const UpdateAddressValidation = require("../validators/update-address-validation");

async function put(req) {
  let addId = req.params.addId;

  const { name, street, city, country } = req.body;

  const validationResult = await UpdateAddressValidation.validate({
    addId,
    name,
    street,
    city,
    country,
  });

  let response = await whenResult(() => {
    return db.execute(
      new UpdateAddressQuery(addId, name, street, city, country)
    );
  })(validationResult);

  console.log(response);

  return respond(
    response,
    "Address updated Successfully",
    "Something went wrong"
  );
}

Route.withOutSecurity().noAuth().put("/users/:id/addresses/:addId", put).bind();

module.exports.put = put;
