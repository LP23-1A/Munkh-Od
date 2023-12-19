const express = require("express");
const bp = require("body-parser");
const app = express();
const port = 8000;

app.use(bp.json());

let users = [
  {
    id: 1,
    name: "orgil",
  },
  {
    id: 2,
    name: "naki",
  },
  {
    id: 3,
    name: "munkherdene",
  },
];

app.get("/", (req, res) => {
  res.send({ success: true, users: users }).end;
});
app.get("/:id", (request, response) => {
  const id = request.params.id;
  const filteredData = users.filter((user) => user.id === parseInt(id));
  response.send({ success: true, users: filteredData }).end();
});
app.post("/", (req, res) => {
  const data = request.body;
  users.push(data);
  res.send({ success: true, users: users }).end();
});

app.put("/:id", (req, res) => {
  const id = req.params.id;

  users.map((user) => {
    if (user.id === parseInt(id)) {
      console.log(id);
      user.name = req.body.name;
    }
  });

  res.send({ success: true, method: users }).end();
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
  if (deletedUserId !== -1) {
    users.splice(deletedUserId, 1);
  }
  res.send({ success: true, users: users }).end;
});

app.listen(port, () => {
  console.log("Server running");
});
