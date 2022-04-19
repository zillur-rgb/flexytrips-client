const express = require("express");
const app = express();
app.use(express.json());

let db = [
  {
    id: 1,
    name: "Zillur",
    age: 25,
  },
  {
    id: 2,
    name: "Mouri",
    age: 24,
  },
];

//Getting all data
app.get("/api/data", (req, res) => {
  res.json(db);
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
