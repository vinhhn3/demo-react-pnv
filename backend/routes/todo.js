// routes/todo.js
const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating todo", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching todos", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send({ message: "Todo not found" });
    }
    res.status(200).send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching todo", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) {
      return res.status(404).send({ message: "Todo not found" });
    }
    res.status(200).send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating todo", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send({ message: "Todo not found" });
    }
    res.status(200).send({ message: "Todo deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting todo", error: error.message });
  }
});

module.exports = router;
