const Tour = require("../model/tour");

const toursRouter = require("express").Router();

// //Getting all data
toursRouter.get("/", (req, res) => {
  Tour.find({}).then((tours) => {
    res.json(tours);
  });
});

//Getting single data
toursRouter.get("/:id", (req, res) => {
  Tour.findById(req.params.id).then((tour) => {
    res.json(tour);
  });
});

//Adding data
toursRouter.post("/", (req, res) => {
  const body = req.body;

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + Math.round(Math.random() * 8);
  const day = date.getDate() + Math.round(Math.random() * 10);
  const finDate = day + "-" + month + "-" + year;

  const newTour = new Tour({
    date: finDate,
    city: body.city,
    country: body.country,
    tripName: body.tripName,
    details: body.details,
    imgs: body.imgs,
    price: body.price,
    ratings: body.ratings,
  });

  newTour.save().then((savedTour) => {
    res.json(savedTour);
  });
});

//Deleting Single Data
toursRouter.delete("/:id", (req, res) => {
  Tour.findByIdAndDelete(req.params.id)
    .then((result) => res.status(204).end())
    .catch((err) => console.log(err.message));
});

//Updating Data
toursRouter.put("/api/tours/:id", (req, res) => {
  const body = req.body;

  const updatedTour = {
    date: body.date,
    city: body.city,
    country: body.country,
    tripName: body.tripName,
    details: body.details,
    imgs: body.imgs,
    price: body.price,
    ratings: body.ratings,
  };

  Tour.findByIdAndUpdate(req.params.id, updatedTour, { new: true })
    .then((updated) => res.json(updated))
    .catch((err) => console.log(err.message));
});

module.exports = toursRouter;
