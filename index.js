const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const db = require("./models");

// html templete engine
app.set("viwe engine", "ejs");

// routes
app.use(express.json());
app.use("/api/v1/blog", require("./routes/blog"));

db.sequelize.sync().then((req) => {
  const PORT = process.env.PORT || 4111;
  app.listen(PORT, console.log("Server don start for port: " + PORT));
});
