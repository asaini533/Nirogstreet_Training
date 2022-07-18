const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const CreateUserValidation = require("../../../../resources/users/validators/create-user-validation");

describe("create user validation", () => {
  it("should mandate name", async () => {
    let response = await CreateUserValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Name is mandatory!");
    })(response);
  });

  it("should mandate country", async () => {
    let response = await CreateUserValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Country Code is mandatory!");
    })(response);
  });

  it("should be a valid country", async () => {
    let response = await CreateUserValidation.validate({ country_code: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include(
        "Country Code should be a numeric value!"
      );
    })(response);
  });

  it("should be a valid when you provide all data", async () => {
    let response = await CreateUserValidation.validate({
      full_name: "user_test",
      country_code: 21,
    });

    verifyResultOk(() => {})(response);
  });
});
