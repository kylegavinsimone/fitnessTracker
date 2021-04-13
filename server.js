const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./controllers");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log("Now listening"));
});
