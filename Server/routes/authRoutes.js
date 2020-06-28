const express = require("express")
const router = express.Router()
const passport = require("passport")

/**   *****************************************************************************
 * @provider    Google
 * @description   Auth with google
 * @route    GET   /auth/google
 */
router.get(
   "/google",
   passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"],
   })
)

/**   *****************************************************************************
 * @provider    Google
 * @description   Google auth redirect
 * @route    GET   /auth/google/redirect
 */
router.get("/google/redirect", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
   res.redirect("/dashboard/")
})

/**   *****************************************************************************
 * @provider    Facebook
 * @description   Auth with Facebook
 * @route    GET   /auth/facebook
 */
router.get(
   "/facebook",
   passport.authenticate("facebook", {
      scope: "email",
   })
)

/**   *****************************************************************************
 * @provider    Facebook
 * @description   Facebook auth redirect
 * @route    GET   /auth/facebook/redirect
 */
router.get(
   "/facebook/redirect",
   passport.authenticate("facebook", { failureRedirect: "/", successRedirect: "/dashboard" })
)

/**   *****************************************************************************
 * @description   LOGOUT USER
 * @route    GET   /auth/logout
 */
router.get("/logout", (req, res) => {
   req.logout()
   res.redirect("/")
})

module.exports = router
