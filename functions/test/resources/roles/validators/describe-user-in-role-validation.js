const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const UserInRoleValidation = require("../../../../resources/roles/validators/user-in-role-validation");

describe("user in a role validation!", () => {
  it("should mandate role ID!", async () => {
    const response = await UserInRoleValidation.validate({});

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Role ID is mandatory!");
    })(response);
  });

  it("should be a valid role ID!", async () => {
    const response = await UserInRoleValidation.validate({ roleId: "a" });

    verifyResultError((error) => {
      expect(error.errorMessage).to.include("Role Id should be an UUID!");
    })(response);
  });

  it("should be a valid when you pass all data!", async () => {
    const response = await UserInRoleValidation.validate({
      roleId: "94a397d3-d0b9-4da6-ae50-3afb95ed48ae",
    });

    verifyResultOk(() => {})(response);
  });
});
