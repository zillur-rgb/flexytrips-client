const feedbackRouter = require("express").Router();
const Feedback = require("../model/testimonials");

// Getting all the data
feedbackRouter.get("/", (req, res) => {
  Feedback.find({}).then((tours) => res.json(tours));
});

//Getting single data
feedbackRouter.get("/:id", (req, res) => {
  Feedback.findById(req.params.id)
    .then((tour) => res.json(tour))
    .catch((err) => console.log(err.message));
});

// Deleting Single Data
feedbackRouter.delete("/:id", (req, res) => {
  Feedback.findByIdAndRemove(req.params.id)
    .then((res) => res.status(204).end())
    .catch((err) => console.log(err.message));
});

//Posting new data
feedbackRouter.post("/", (req, res) => {
  const body = req.body;

  const newFeedback = new Feedback({
    name: body.name,
    review: body.review,
    rating: body.rating,
    img: body.img,
  });

  newFeedback.save().then((savedFeedback) => res.json(savedFeedback));
});

// Updating New Data
feedbackRouter.put("/:id", (req, res) => {
  const body = req.body;

  const updatedFeedback = {
    name: body.name,
    review: body.review,
    rating: body.rating,
    img: body.img,
  };

  Feedback.findByIdAndUpdate(req.params.id, updatedFeedback, { new: true })
    .then((updated) => res.json(updated))
    .catch((err) => console.log(err.message));
});

module.exports = feedbackRouter;
