const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("./config/connectToDb");
const PORT = 4000;

connectDb();
app.use(cors());

app.use(express.json());
app.use("/", require("./routes/api/students"));

mongoose.connection.once("open", () => {
  console.log("connected to mongoDb");
  app.listen(PORT, console.log(`Server running at port ${PORT}`));
});
