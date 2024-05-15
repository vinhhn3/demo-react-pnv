// routes/todo.js
const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.send(todo);
});

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.send(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(todo);
});

router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send({ message: "Todo deleted" });
});

module.exports = router;
