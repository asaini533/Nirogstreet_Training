const passport = require("passport");

module.exports = (app) => {
  app.post(
    "/auth/mobile/user",
    passport.authenticate("custom-user", {
      session: false,
    }),
    (req, res) => {
      res.send(req.user);
    }
  );
};
