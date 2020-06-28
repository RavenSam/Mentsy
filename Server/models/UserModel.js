const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   provider: {
      type: String,
      required: true,
   },
   providerId: {
      type: String,
      required: true,
   },
   displayName: {
      type: String,
      required: true,
   },
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   thumbnail: {
      type: String,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
})

module.exports = mongoose.model("User", userSchema)
