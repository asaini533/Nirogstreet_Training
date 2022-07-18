const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const GetAadharValidation = require("../../../../resources/aadhar/validators/get-aadhar-validation");

describe("get aadhar validator!", () => {
  it("should mandate userId!", async () => {
    const response = await GetAadharValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id is mandatory!");
    })(response);
  });

  it("should ve a valid userId!", async () => {
    const response = await GetAadharValidation.validate({ userId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id should be an UUID!");
    })(response);
  });

  it("should be valid when you pass all data!", async () => {
    const response = await GetAadharValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
    });

    verifyResultOk(() => {})(response);
  });
});
