const express = require("express");
const userRoute = require("./user");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    success: true,
    message: "User Service Already Running",
  });
});

router.use("/user", userRoute);

router.all("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Url is not valid, please check the documentation",
  });
});

module.exports = router;