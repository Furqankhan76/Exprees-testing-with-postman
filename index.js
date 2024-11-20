import "dotenv/config";
import express from "express";

const app = express();
const port = 8000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Furqan khan");
});

//get aall teas
app.get("/teas", (req, res) => {
  res.send(teadata);
});

//get single

app.get("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  res.status(201).send(tea);
});

let teadata = [];
let value = 1;

//add a tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newtea = { id: value++, name, price };
  teadata.push(newtea);
  res.status(200).send(newtea);
  console.log(newtea);
});

//updte a tea
app.put("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).json(tea);
});

//delete tea
app.delete("/teas/:id", (req, res) => {
  console.log("delete");
  console.log(req.params.id);

  const index = teadata.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  const dk = teadata.splice(index, 1);
  return res.status(204).json();
});

app.listen(port, () => {
  console.log(`server is connected on ${port}`);
});
