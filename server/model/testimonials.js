const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const url = process.env.MONGODB_URI;
console.log(`Server conencting to ${url}`);

mongoose
  .connect(url)
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err.message));

const feedbackSchema = new mongoose.Schema({
  name: String,
  review: String,
  rating: Number,
});

feedbackSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
