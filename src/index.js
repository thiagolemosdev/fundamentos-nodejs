const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite!" });
});

app.get("/courses", (request, response) => {
  return response.json(["Curso1", "Curso2", "Curso3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

app.delete("/courses/:id", (reqquest, response) => {
  return response.json(["Curso6", "Curso2", "Curso3"]);
});

app.listen(3333);
