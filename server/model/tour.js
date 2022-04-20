const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const url = process.env.MONGODB_URI;
console.log(`Server conencting to ${url}`);

mongoose
  .connect(url)
  .then((res) => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error occurred : ${err.message}`));

const tourSchema = new mongoose.Schema({
  date: String,
  city: String,
  country: String,
  tripName: String,
  details: String,
  imgs: Array,
  price: Number,
  ratings: Number,
});

tourSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Tour", tourSchema);
