// api-gateway/index.js
const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();
const cors = require("cors");
const port = 3001;
const { TEACHERS_API_URL, STUDENTS_API_URL } = require("./urls/urls");
const validate = require("./middlewares/validate");
const studentCreateValidations = require("./middlewares/students-validations");
const teacherServiceProxy = httpProxy(TEACHERS_API_URL);
const studentServiceProxy = httpProxy(STUDENTS_API_URL);

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/teacher", (req, res, next) => {
  teacherServiceProxy(req, res, next);
});

app.use("/student", studentCreateValidations(), validate, (req, res, next) => {
  studentServiceProxy(req, res, next);
});

app.listen(port, () => console.log(`API gateway listening on port ${port}!`));
