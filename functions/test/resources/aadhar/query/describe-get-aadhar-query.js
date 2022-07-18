const chai = require("chai");
const { expect } = chai;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const db = require("../../../../db/repository");
const ds = require("../../../helpers/dataSetup");
const RunQuery = require("../../../data/run-query");
const GetAadharQuery = require("../../../../resources/aadhar/query/get-aadhar-query");

describe("create aadhar query", () => {
  let aadhar;
  beforeEach(async () => {
    aadhar = await ds.buildSingle(ds.aadhar);
  });

  it("should create aa user aadhar", async () => {
    // console.log("aadahar", aadhar);
    const fetchedAdharResponse = await db.execute(
      new GetAadharQuery(aadhar.user.id)
    );

    verifyResultOk((createdAadhar) => {
      // console.log(createdAadhar);
    })(fetchedAdharResponse);

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
