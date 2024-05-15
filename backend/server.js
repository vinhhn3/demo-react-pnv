// server.js
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");
const categoryRoutes = require("./routes/category");

const app = express();

mongoose.connect(
  "mongodb+srv://vinhhn3:Sr79qt7Pni4iannH@cluster0.hdjsj3r.mongodb.net/pnv",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors()); // This will allow all origins
app.use(express.json());
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/todo", todoRoutes);
app.use("/category", categoryRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));
