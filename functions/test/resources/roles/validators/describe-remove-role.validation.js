const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const RemoveRoleValidation = require("../../../../resources/roles/validators/remove-role-validation");

describe("remove role validation!", () => {
  it("should mandate user ID!", async () => {
    const response = await RemoveRoleValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User ID is mandatory!");
    })(response);
  });

  it("should be a valid UserID!", async () => {
    const response = await RemoveRoleValidation.validate({ userId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User ID should be an UUID!");
    })(response);
  });

  it("should mandate role ID!", async () => {
    const response = await RemoveRoleValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Role ID is mandatory!");
    })(response);
  });

  it("should be a valid role ID!", async () => {
    const response = await RemoveRoleValidation.validate({ roleId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Role Id should be an UUID!");
    })(response);
  });

  it("should be a valid when you pass all data!", async () => {
    const response = await RemoveRoleValidation.validate({
      userId: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
      roleId: "94a397d3-d0b9-4da6-ae50-3afb95ed48ae",
    });

    verifyResultOk(() => {})(response);
  });
});
