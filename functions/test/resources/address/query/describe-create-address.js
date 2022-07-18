const chai = require("chai");
const { expect } = chai;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const db = require("../../../../db/repository");
const ds = require("../../../helpers/dataSetup");
const RunQuery = require("../../../data/run-query");
const CreateAddressQuery = require("../../../../resources/address/query/create-address-query");

describe.only("create address query", () => {
  let user, address;
  beforeEach(async () => {
    user = await ds.createSingle(ds.user);
    address = await ds.buildSingle(ds.address, { user });
  });

  it("should create aa user address", async () => {
    const createdAddressResponse = await db.execute(
      new CreateAddressQuery(
        user.id,
        user.full_name,
        address.street,
        address.city,
        address.country
      )
    );

    verifyResultOk((createdAddress) => {
      expect(address.user.full_name).to.eql(createdAddress.dataValues.name);
      expect(address.street).to.eql(createdAddress.dataValues.street);
      expect(address.city).to.eql(createdAddress.dataValues.city);
      expect(address.country).to.eql(createdAddress.dataValues.country);
    })(createdAddressResponse);

    // const fetchedAddress = await db.findOne(
    //   new RunQuery('select * from public."Addresses" where userId=:userId', {
    //     userId: user.id,
    //   })
    // );

    // console.log("address", fetchedAddress);
  });

  after(async () => {
    await ds.deleteAll();
  });
});
