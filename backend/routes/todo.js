// routes/todo.js
const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, categoryId } = req.body;
  const todo = new Todo({
    title,
    user: req.cookies.userId, // Add the userId from the cookie to the todo
    category: categoryId, // Add the categoryId from the request body to the todo
  });
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
    const todos = await Todo.find({ user: req.cookies.userId })
      .populate("user")
      .populate("category"); // Only find todos for the current user
    res.send(todos);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching todos", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.cookies.userId,
    }); // Only find todo for the current user
    if (!todo) {
      return res.status(404).send();
    }
    Object.assign(todo, req.body);
    await todo.save();
    res.send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating todo", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.cookies.userId,
    }); // Only delete todo for the current user
    if (!todo) {
      return res.status(404).send();
    }
    res.send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting todo", error: error.message });
  }
});

module.exports = router;
