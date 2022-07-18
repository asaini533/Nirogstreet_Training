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
const GetSpecificUserQuery = require("../../../../resources/users/query/get-specific-user-query");

describe("descibe fetch specific user api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      params: { id: "5f0d7800-033d-11ed-9ab7-534ed87d2209" },
    };
    res = {
      setHeader: sandbox.spy(),
      send: sandbox.spy(),
      status: sandbox.spy(() => {
        return res;
      }),
    };
  });

  it("should get specific user", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(GetSpecificUserQuery);
        })
      )
      .returns(
        resolveOk([
          { full_name: "user2", country_code: 2, aadharId: null, Roles: [] },
        ])
      );

    const response = await TestRoutes.execute("/users/:id", "Get", req, res);

    expect(response).to.eql({
      status: true,
      message: "User fetched successfully",
      entity: [
        { full_name: "user2", country_code: 2, aadharId: null, Roles: [] },
      ],
    });
  });

  it("should not fetch specific user", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(resolveError("some random error"));

    const response = await TestRoutes.executeWithError(
      "/users/:id",
      "Get",
      req,
      res
    );

    expect(response).to.eql(
      new ApiError(0, "some random error", "something Went wrong")
    );
  });

  afterEach(() => {
    sandbox.verifyAndRestore();
  });
});
