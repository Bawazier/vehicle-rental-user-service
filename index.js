require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./src/routes");

const app = express();
const { PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
