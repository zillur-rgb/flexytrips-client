const express = require("express");
const dotenv = require("dotenv").config();
const Tour = require("./model/tour");
const app = express();
app.use(express.json());

//Getting all data
app.get("/api/data", (req, res) => {
  Tour.find({}).then((tours) => {
    res.json(tours);
  });
});

//Getting single data
app.get("/api/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = db.find((d) => d.id === id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).end();
  }
});

//Adding single data
app.post("/api/data", (req, res) => {
  const body = req.body;
  const lastIdx = db[db.length - 1].id;

  const newDB = {
    id: lastIdx + 1,
    name: body.name,
    age: body.age,
  };

  db = [...db, newDB];
  res.json(db);
});

//Deleting Single Data
app.delete("/api/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const db = db.filter((d) => d.id !== id);
  res.status(204).end();
});

//Calling PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
