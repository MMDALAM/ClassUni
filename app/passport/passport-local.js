const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("app/models/user");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "local.register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      await User.findOne({ username: username }, async (err, user) => {
        if (err) return done(err);
        if (user)
          return done(
            null,
            false,
            req.flash("errors", "چنین کاربری قبلا در سایت ثبت نام کرده")
          );

        const newUser = new User({
          name: req.body.name,
          username,
          password,
        });

        await newUser.save((err) => {
          if (err)
            return done(
              err,
              false,
              req.flash("errors", " ثبت نام با موفقبت انجام نشد ")
            );
          done(null, newUser);
        });
      });
    }
  )
);

passport.use(
  "local.login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      await User.findOne({ username: username }, (err, user) => {
        if (err) return done(err);

        if (!user || password !== user.password) {
          return done(
            null,
            false,
            req.flash("errors", "اطلاعات وارد شده مطابقت ندارد")
          );
        }

        done(null, user);
      });
    }
  )
);
