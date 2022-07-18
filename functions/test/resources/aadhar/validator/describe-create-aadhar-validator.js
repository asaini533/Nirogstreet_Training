const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const CreateAadharValidation = require("../../../../resources/aadhar/validators/create-aadhar-validation");

describe("create aadhar validator!", () => {
  it("should mandate userId!", async () => {
    const response = await CreateAadharValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("UserId is mandatory!");
    })(response);
  });

  it("should ve a valid userId!", async () => {
    const response = await CreateAadharValidation.validate({ userId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("UserId should be an UUID!");
    })(response);
  });

  it("should mandate name!", async () => {
    const response = await CreateAadharValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Name is mandatory!");
    })(response);
  });

  it("should be valid when you pass all data!", async () => {
    const response = await CreateAadharValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
      name: "test user",
    });

    verifyResultOk(() => {})(response);
  });
});
