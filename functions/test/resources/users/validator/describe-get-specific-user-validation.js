const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const GetSpecificUserValidation = require("../../../../resources/users/validators/get-specific-user-validation");

describe("get specific user validation", () => {
  it("should mandate user ID!", async () => {
    let response = await GetSpecificUserValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id is mandatory!");
    })(response);
  });

  it("should should be a valid user ID!", async () => {
    let response = await GetSpecificUserValidation.validate({ userId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id should be an UUID!");
    })(response);
  });

  it("should should be a valid when you pass all data!", async () => {
    let response = await GetSpecificUserValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
    });

    verifyResultOk(() => {})(response);
  });
});
