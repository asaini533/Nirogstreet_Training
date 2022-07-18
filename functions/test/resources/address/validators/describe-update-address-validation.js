const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const UpdateAddressValidation = require("../../../../resources/address/validators/update-address-validation");

describe("update address validation!", () => {
  it("should mandate Address Id!", async () => {
    const response = await UpdateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Address Id is mandatory!");
    })(response);
  });

  it("should be a valid Address Id!", async () => {
    const response = await UpdateAddressValidation.validate({ addId: "a" });
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Address Id should be an UUID!");
    })(response);
  });

  it("should mandate name!", async () => {
    const response = await UpdateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Name is mandatory!");
    })(response);
  });

  it("should mandate street!", async () => {
    const response = await UpdateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Street is mandatory!");
    })(response);
  });

  it("should mandate city!", async () => {
    const response = await UpdateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("City is mandatory!");
    })(response);
  });

  it("should mandate country!", async () => {
    const response = await UpdateAddressValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Country is mandatory!");
    })(response);
  });

  it("should be valid when you pass all data!", async () => {
    const response = await UpdateAddressValidation.validate({
      addId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
      name: "Test Name",
      street: "test street",
      city: "test city",
      country: "test country",
    });
    verifyResultOk(() => {})(response);
  });
});
