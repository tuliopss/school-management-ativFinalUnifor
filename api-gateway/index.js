// const express = require("express");
// const httpProxy = require("express-http-proxy");
// const app = express();
// const port = 3001;
// const { TEACHERS_API_URL } = require("./urls/urls");

// const teacherServiceProxy = httpProxy(TEACHERS_API_URL);
// // const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

// app.get("/", (req, res) => res.send("Hello Gateway API"));

// app.get("/teacher", (req, res, next) => teacherServiceProxy(req, res, next));
// // app.get("/products", (req, res, next) => productsServiceProxy(req, res, next));

// app.listen(port, () => console.log(`API gateway listening on port ${port}!`));
// api-gateway/index.js
const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();
const port = 3001;
const { TEACHERS_API_URL } = require("./urls/urls");
const authGuard = require("./middlewares/authGuard");
const teacherServiceProxy = httpProxy(TEACHERS_API_URL);

app.get("/", (req, res) => res.send("Hello Gateway API"));

app.use("/teacher", authGuard, (req, res, next) => {
  teacherServiceProxy(req, res, next);
});

app.listen(port, () => console.log(`API gateway listening on port ${port}!`));
