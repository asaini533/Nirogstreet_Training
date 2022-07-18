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
const CreateRoleQuery = require("../../../../resources/roles/query/create-role-query");

describe("descibe create role api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      params: {
        id: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
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

  it("should create a role", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(CreateRoleQuery);
        })
      )
      .returns(resolveOk([{ name: "user", UserRoles: [] }]));

    const response = await TestRoutes.execute(
      "/users/:id/roles/:rid",
      "Post",
      req,
      res
    );

    expect(response).to.eql({
      status: true,
      message: "Role assigned successfully",
      entity: [{ name: "user", UserRoles: [] }],
    });
  });

  it("should not create a role", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(resolveError("some random error"));

    const response = await TestRoutes.executeWithError(
      "/users/:id/roles/:rid",
      "Post",
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
