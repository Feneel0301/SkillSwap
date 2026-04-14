require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();

// middlewares
app.use(express.json());

// routes (empty for now, will plug later)
// app.use("/api/v1/auth", require("./routes/auth.routes"));
// app.use("/api/v1/user", require("./routes/user.routes"));

// test route
app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});