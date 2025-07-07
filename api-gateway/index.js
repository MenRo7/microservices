require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL));

app.listen(process.env.PORT, () => {
  console.log(`API Gateway running on port ${process.env.PORT}`);
});
