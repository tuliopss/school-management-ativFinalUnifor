const router = require("express").Router();
const TeacherController = require("../controllers/teacher-controller");
const authGuard = require("../middlewares/authGuard");

router.get("/teste", TeacherController.testeMicro);
router.get("/", authGuard, TeacherController.getAllTeachers);
router.get("/profile", authGuard, TeacherController.getCurrentUser);
router.post("/register", TeacherController.register);
router.post("/login", TeacherController.login);

module.exports = router;

// teacher-service/index.js
