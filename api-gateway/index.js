// api-gateway/index.js
const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();
const port = 3001;
const { TEACHERS_API_URL, STUDENTS_API_URL } = require("./urls/urls");
const teacherServiceProxy = httpProxy(TEACHERS_API_URL);
const studentServiceProxy = httpProxy(STUDENTS_API_URL);

app.use("/teacher", (req, res, next) => {
  teacherServiceProxy(req, res, next);
});
app.use("/student", (req, res, next) => {
  studentServiceProxy(req, res, next);
});

app.listen(port, () => console.log(`API gateway listening on port ${port}!`));
