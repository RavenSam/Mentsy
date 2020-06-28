const mongoose = require("mongoose")

const connectDB = async () => {
   try {
      const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true }

      await mongoose.connect(process.env.MONGO_URI, dbOptions)

      console.log(`Connected to MongoDB...`)
   } catch (err) {
      console.error(err)
      process.exit(1)
   }
}

module.exports = connectDB
