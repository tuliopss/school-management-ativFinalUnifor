// const router = require("express").Router();

// const TeacherController = require("../controllers/teacher-controller");

// router.get("/teste", TeacherController.testeMicro);

// module.exports = router;
// teacher-service/routes/teacher-routes.js
const router = require("express").Router();
const TeacherController = require("../controllers/teacher-controller");
const authGuard = require("../middlewares/authGuard");

router.get("/teste", TeacherController.testeMicro);
router.get("/get", authGuard, TeacherController.getAllTeachers);
router.post("/register", TeacherController.register);

module.exports = router;

// teacher-service/index.js
