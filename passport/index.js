var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "username"

  },
  function (username, password, done) {
    console.log("authenticating...");

    db.User.findOne({ username }).then(async function (dbUser) {
      console.log(dbUser)
      if (!dbUser) {
        console.log('no User')
        return done(null, false, {
          message: "Incorrect email."
        });
      }

      const passwordCorrect = await dbUser.comparePassword(password);
      if (!passwordCorrect) {
        return done(null, false, "Incorrect Password")
      } else {
        return done(null, dbUser);
      }

    }).catch(err => {
      err.send("there was an error")
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


module.exports = passport;