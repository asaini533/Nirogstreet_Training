const passport = require("passport");

module.exports = (app) => {
  app.use(passport.initialize());
  require("./strategy");
  require("./google-apis")(app);
  require("./mobile-apis")(app);
};
