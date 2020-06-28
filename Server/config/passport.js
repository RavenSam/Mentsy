const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const User = require("../models/UserModel")

module.exports = function (passport) {
   /**   *****************************************************************************
    * @Strategy    Google
    * @description   Auth with google Strategy
    */
   passport.use(
      new GoogleStrategy(
         {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/redirect",
         },

         async (accessToken, refreshToken, profile, cb) => {
            const newUser = {
               provider: "Google",
               providerId: profile.id,
               displayName: profile.displayName,
               firstName: profile.name.givenName,
               lastName: profile.name.familyName,
               email: profile.emails[0].value,
               thumbnail: profile.photos[0].value,
            }

            try {
               let user = await User.findOne({ providerId: profile.id })

               if (user) {
                  cb(null, user)
               } else {
                  user = await User.create(newUser)
                  cb(null, user)
               }
            } catch (err) {
               console.error(err)
            }
         }
      )
   )

   /**   *****************************************************************************
    * @Strategy    Facebook
    * @description   Auth with Facebook Strategy
    */
   passport.use(
      new FacebookStrategy(
         {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "/auth/facebook/redirect",
            profileFields: ["id", "displayName", "photos", "email", "gender", "name"],
         },
         async (accessToken, refreshToken, profile, cb) => {
            const newUser = {
               provider: "Facebook",
               providerId: profile.id,
               displayName: profile.displayName,
               firstName: profile.name.givenName,
               lastName: profile.name.familyName,
               email: profile.emails[0].value,
               thumbnail: profile.photos[0].value,
            }

            try {
               let user = await User.findOne({ providerId: profile.id })

               if (user) {
                  cb(null, user)
               } else {
                  user = await User.create(newUser)
                  cb(null, user)
               }
            } catch (err) {
               console.error(err)
            }
         }
      )
   )

   /**   *****************************************************************************
    * @description   Serialize and Deserialize the User
    */
   passport.serializeUser((user, done) => done(null, user.id))

   passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => done(err, user))
   })
}
