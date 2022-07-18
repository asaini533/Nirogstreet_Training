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
const UpdateAddressQuery = require("../../../../resources/address/query/update-address-query");

describe("descibe update address api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      params: { addId: "5f0d7800-033d-11ed-9ab7-534ed87d2209" },
      body: {
        name: "User1_update",
        street: "street2",
        city: "city2",
        country: "country2",
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

  it("should update an user address", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(UpdateAddressQuery);
        })
      )
      .returns(
        resolveOk({
          name: "User1_update",
          street: "street2",
          city: "city2",
          country: "country2",
        })
      );

    const response = await TestRoutes.execute(
      "/users/:id/addresses/:addId",
      "Put",
      req,
      res
    );

    expect(response).to.eql({
      status: true,
      message: "Address updated Successfully",
      entity: {
        name: "User1_update",
        street: "street2",
        city: "city2",
        country: "country2",
      },
    });
  });

  it("should not update any address", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(resolveError("some random error"));

    const response = await TestRoutes.executeWithError(
      "/users/:id/addresses/:addId",
      "Put",
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
