// routes/category.js
const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

router.post("/", async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating category", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching categories", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }
    res.status(200).send(category);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching category", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }
    res.status(200).send(category);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating category", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }
    res.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting category", error: error.message });
  }
});

module.exports = router;
