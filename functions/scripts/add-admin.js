require('app-module-path').addPath(__dirname + "/../");
const { Role, User } = require("models");
const uuid = require("uuid")
module.exports = {
    async addAdmin(email) {
        let admin = await User.findOrCreate({
            where: { email },
            defaults: { email, id: uuid.v4(), full_name: email.split("@")[0] }
        });
        let adminRole = await Role.findOne({ where: { name: "admin", type: "admin" } });
        await admin[0].addRole(adminRole);
        console.log(email + " added as an admin");
        return true;
    }
};
require('make-runnable');