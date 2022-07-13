const passport = require("passport");
const config = require("config-handler");
const { failureRedirect, successRedirect } = config.google;

module.exports = (app) => {
  app.get("/auth/google", function (req, res, next) {
    const { state } = req.query;
    passport.authenticate("google", {
      scope: ["profile", "email"],
      state,
    })(req, res, next);
  });

  app.get("/auth/google/callback", function (req, res, next) {
    passport.authenticate(
      "google",
      {
        session: false,
      },
      function (_err, user, type_of_user) {
        if (!user) return res.redirect(failureRedirect[type_of_user]);
        return res.redirect(
          successRedirect[type_of_user] + "?token=" + user.token
        );
      }
    )(req, res, next);
  });
};
