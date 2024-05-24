const express = require("express");
// const conn = require("./db/conn");
const cors = require("cors");

const teacherRoutes = require("./teacher/routes/teacher.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//Routes
app.use("/", teacherRoutes);

app.listen(3000, () => {
  console.log("microsservice teacher running");
});
// conn
//   .sync()
//   .then(() => {
//     app.listen(3000);
//   })
//   .catch((error) => console.log(error));
