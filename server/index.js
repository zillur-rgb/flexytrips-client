const express = require("express");
const toursRouter = require("./controllers/tours");
const feedbackRouter = require("./controllers/feedback");
const dotenv = require("dotenv").config();
const Tour = require("./model/tour");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/tours", toursRouter);
app.use("/api/feedbacks", feedbackRouter);

//Calling PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
