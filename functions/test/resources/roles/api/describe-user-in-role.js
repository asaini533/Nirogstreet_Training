const ApiError = require("../../../../lib/functional/api-error");
const ValidationError = require("../../../../lib/validation-error");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
const TestRoutes = require("../../../helpers/test-route");
chai.use(sinonChai);
const uuid = require("uuid");
const db = require("../../../../db/repository");
const {
  resolveDbResult,
  resolveOk,
  resolveError,
  validationError,
} = require("../../../helpers/resolvers");
const { verifyArgs } = require("../../../helpers/verifiers");
const UserInRoleQuery = require("../../../../resources/roles/query/user-in-role-query");

describe("descibe user in role api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      params: {
        rid: "f49ff1b1-033b-11ed-9379-2d31e3916261",
      },
    };
    res = {
      setHeader: sandbox.spy(),
      send: sandbox.spy(),
      status: sandbox.spy(() => {
        return res;
      }),
    };
  });

  it("should get user in role", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(UserInRoleQuery);
        })
      )
      .returns(
        resolveOk([
          {
            full_name: "User1_update",
            country_code: 21,
            aadharId: "c4eb0b17-9c0f-4325-8241-074743ef9ccb",
            Roles: [],
          },
        ])
      );

    const response = await TestRoutes.execute(
      "/users/roles/:rid",
      "Get",
      req,
      res
    );

    expect(response).to.eql({
      status: true,
      message: "Users in a role fetched successfully",
      entity: [
        {
          full_name: "User1_update",
          country_code: 21,
          aadharId: "c4eb0b17-9c0f-4325-8241-074743ef9ccb",
          Roles: [],
        },
      ],
    });
  });

  it("should not get a user in role", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(resolveError("some random error"));

    const response = await TestRoutes.executeWithError(
      "/users/roles/:rid",
      "Get",
      req,
      res
    );

    expect(response).to.eql(
      new ApiError(0, "some random error", "Something went wrong")
    );
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
  });
});
