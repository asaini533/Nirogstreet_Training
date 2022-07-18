const passport = require("passport");
const config = require("config-handler");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passportCustom = require("passport-custom");
const CustomStrategy = passportCustom.Strategy;
const {
  GoogleLoginService,
} = require("resources/sessions/services/google-login-service");
const {
  createMobileSession,
} = require("resources/sessions/services/create-mobile-session-service");
passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.GOOGLE_CLIENT_ID,
      clientSecret: config.google.GOOGLE_CLIENT_SECRET,
      callbackURL: config.google.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, _accessToken, _refreshToken, profile, cb) =>
      GoogleLoginService[req.query.state](profile, cb)
  )
);
passport.use(
  "custom-user",
  new CustomStrategy(async function (req, done) {
    let response = await createMobileSession(req);
    done(null, response.value);
  })
);
