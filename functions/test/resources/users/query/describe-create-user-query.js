const chai = require("chai");
const { expect } = chai;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");
const db = require("../../../../db/repository");
const ds = require("../../../helpers/dataSetup");
const RunQuery = require("../../../data/run-query");
const CreateUserQuery = require("../../../../resources/users/query/create-user-query");

describe.only("create user query", () => {
  let user;
  beforeEach(async () => {
    user = await ds.buildSingle(ds.user);
  });

  it("should create a user", async () => {
    const createdUserResponse = await db.execute(
      new CreateUserQuery(user.id, user.full_name, user.country_code)
    );

    verifyResultOk((createdUser) => {
      expect(user.full_name).eq(createdUser.full_name);
      expect(user.country_code).eq(createdUser.country_code);
    })(createdUserResponse);

    const fetchedUserResponse = await db.findOne(
      new RunQuery('select * from  public."Users" where id=:id', {
        id: user.id,
      })
    );

    verifyResultOk((createdUser) => {
      expect(user.full_name).eq(createdUser.full_name);
      expect(user.country_code).eq(createdUser.country_code);
    })(fetchedUserResponse);
  });

  after(async () => {
    await ds.deleteAll();
  });
});
