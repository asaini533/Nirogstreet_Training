const chai = require("chai");
const { expect } = chai;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const db = require("../../../../db/repository");
const ds = require("../../../helpers/dataSetup");
const RunQuery = require("../../../data/run-query");
const CreateAadharQuery = require("../../../../resources/aadhar/query/create-aadhar-query");

describe.only("create aadhar query", () => {
  let user, aadhar;
  beforeEach(async () => {
    user = await ds.createSingle(ds.user);
    aadhar = await ds.buildSingle(ds.aadhar, { user });
  });

  it("should create aa user aadhar", async () => {
    const createdAdharResponse = await db.execute(
      new CreateAadharQuery(user.id, user.full_name, aadhar.aadharNumber)
    );

    verifyResultOk((createdAadhar) => {
      expect(aadhar.aadharNumber.toString()).to.eql(
        createdAadhar.dataValues.aadharNumber
      );

      expect(aadhar.user.full_name).to.eql(createdAadhar.dataValues.name);
    })(createdAdharResponse);

    // const fetchedAadhar = await db.findOne(
    //   new RunQuery(
    //     'select * from public."Aadhars" where aadharNumber=:aadharNumber',
    //     { aadharNumber: aadhar.aadharNumber }
    //   )
    // );
  });

  after(async () => {
    await ds.deleteAll();
  });
});
