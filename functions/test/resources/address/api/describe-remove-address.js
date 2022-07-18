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
const RemoveAddressQuery = require("../../../../resources/address/query/remove-address-query");

describe("descibe remove address api", () => {
  let sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      params: {
        id: "5f0d7800-033d-11ed-9ab7-534ed87d2209",
        addId: "94a397d3-d0b9-4da6-ae50-3afb95ed48ae",
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

  it("should remove an user address", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .withArgs(
        verifyArgs((query) => {
          expect(query).to.be.instanceOf(RemoveAddressQuery);
        })
      )
      .returns(
        resolveOk([
          {
            name: "User1_update",
            street: "street2",
            city: "city2",
            country: "country2",
          },
        ])
      );

    const response = await TestRoutes.execute(
      "/users/:id/addresses/:addId",
      "Delete",
      req,
      res
    );

    expect(response).to.eql({
      status: true,
      message: "Address Removed Successfully",
      entity: [
        {
          name: "User1_update",
          street: "street2",
          city: "city2",
          country: "country2",
        },
      ],
    });
  });

  it("should not remove any address", async () => {
    sandbox
      .mock(db)
      .expects("execute")
      .returns(resolveError("some random error"));

    const response = await TestRoutes.executeWithError(
      "/users/:id/addresses/:addId",
      "Delete",
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
