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
const CreateAadharQuery = require("../../../../resources/aadhar/query/create-aadhar-query");

describe("descibe create aadhar api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      params: { id: "5f0d7800-033d-11ed-9ab7-534ed87d2209" },
      body: { name: "Test User" },
    };
    res = {
      setHeader: sandbox.spy(),
      send: sandbox.spy(),
      status: sandbox.spy(() => {
        return res;
      }),
    };
  });

  it("should create a aadhar", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(CreateAadharQuery);
        })
      )
      .returns(
        resolveOk({ name: "user1_update", aadharNumber: "1657965103253" })
      );

    const response = await TestRoutes.execute(
      "/users/:id/aadhar",
      "Post",
      req,
      res
    );

    expect(response).to.eql({
      status: true,
      message: "Aadhar Created Successfully",
      entity: {
        name: "user1_update",
        aadharNumber: "1657965103253",
      },
    });
  });

  it("should not create an aadhar", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(resolveError("some random error"));

    const response = await TestRoutes.executeWithError(
      "/users/:id/aadhar",
      "Post",
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
