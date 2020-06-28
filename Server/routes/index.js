const express = require("express")
const router = express.Router()

/**   *****************************************************************************
 * @description   Home
 * @route    GET   /
 */
router.get("/", (req, res) => {
   res.send(`<h2>Home</h2>`)
})

module.exports = router
