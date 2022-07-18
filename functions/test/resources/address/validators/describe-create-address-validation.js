const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const CreateAddressValidation = require("../../../../resources/address/validators/create-address-validation");

describe("create address validation!", () => {
  it("should mandate userId!", async () => {
    const response = await CreateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("UserId is mandatory!");
    })(response);
  });

  it("should be a valid userId!", async () => {
    const response = await CreateAddressValidation.validate({ userId: "a" });
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("UserId should be an UUID!");
    })(response);
  });

  it("should mandate name!", async () => {
    const response = await CreateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Name is mandatory!");
    })(response);
  });

  it("should mandate street!", async () => {
    const response = await CreateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Street is mandatory!");
    })(response);
  });

  it("should mandate city!", async () => {
    const response = await CreateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("City is mandatory!");
    })(response);
  });

  it("should mandate country!", async () => {
    const response = await CreateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Country is mandatory!");
    })(response);
  });

  it("should be valid when you pass all data!", async () => {
    const response = await CreateAddressValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
      name: "Test Name",
      street: "test street",
      city: "test city",
      country: "test country",
    });
    verifyResultOk(() => {})(response);
  });
});
