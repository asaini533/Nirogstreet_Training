const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const UpdateUserValidation = require("../../../../resources/users/validators/update-user-validation");

describe("update user validation!", () => {
  it("should mandate name", async () => {
    let response = await UpdateUserValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Name is mandatory!");
    })(response);
  });

  it("should mandate country", async () => {
    let response = await UpdateUserValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Country Code is mandatory!");
    })(response);
  });

  it("should be a valid country", async () => {
    let response = await UpdateUserValidation.validate({ country_code: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include(
        "Country Code should be a numeric value!"
      );
    })(response);
  });

  it("should be a valid when you provide all data", async () => {
    let response = await UpdateUserValidation.validate({
      full_name: "user_test",
      country_code: 21,
    });

    verifyResultOk(() => {})(response);
  });
});
