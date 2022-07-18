const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const GetAddressValidation = require("../../../../resources/address/validators/get-address-validation");

describe("get address validation!", () => {
  it("should mandate userID!", async () => {
    const response = await GetAddressValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id is mandatory!");
    })(response);
  });

  it("should be a valid userID!", async () => {
    const response = await GetAddressValidation.validate({ userId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id should be an UUID!");
    })(response);
  });

  it("should be a valid when you pass all data!", async () => {
    const response = await GetAddressValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
    });

    verifyResultOk(() => {})(response);
  });
});
