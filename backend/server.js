require("dotenv").config();

const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Product Routes
app.use("/api/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Beauty Store Backend Running");
});

// Start Server
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});