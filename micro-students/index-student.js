require("dotenv").config();

const express = require("express");
// const conn = require("./db/conn");
const cors = require("cors");

const studentRoutes = require("./student/routes/student.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

require("./db/conn.js");

//Routes
app.use("/", studentRoutes);

app.listen(3002, () => {
  console.log("microsservice student running");
});
// conn
//   .sync()
//   .then(() => {
//     app.listen(3000);
//   })
//   .catch((error) => console.log(error));
