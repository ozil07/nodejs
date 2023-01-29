require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const createPath = require("./helpers/create-path");

const postRoutes = require("./routes/post-routes");
const postApiRoutes = require("./routes/api-post-routes");
const contactsRoutes = require("./routes/contacts-route");

const app = express();

app.set("view engine", "ejs");

const PORT = 3000;

mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URL)
  .then(() => console.log("coonect db"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.static("styles"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(postRoutes);
app.use(postApiRoutes);
app.use(contactsRoutes);

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use((req, res) => {
  const title = "Error Page";
  res.status(404).render(createPath("error"), { title });
});
