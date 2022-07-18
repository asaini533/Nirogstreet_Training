const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const RemoveAddressValidation = require("../../../../resources/address/validators/remove-address-validation");

describe("remove address validation!", () => {
  it("should mandate user ID!", async () => {
    const response = await RemoveAddressValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id is mandatory!");
    })(response);
  });

  it("should be a valid UserID!", async () => {
    const response = await RemoveAddressValidation.validate({ userId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User Id should be an UUID!");
    })(response);
  });

  it("should mandate address ID!", async () => {
    const response = await RemoveAddressValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Address Id is mandatory!");
    })(response);
  });

  it("should be a valid Address ID!", async () => {
    const response = await RemoveAddressValidation.validate({ addressId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Address ID should be an UUID!");
    })(response);
  });

  it("should be a valid when you pass all data!", async () => {
    const response = await RemoveAddressValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
      addressId: "94a397d3-d0b9-4da6-ae50-3afb95ed48ae",
    });

    verifyResultOk(() => {})(response);
  });
});
