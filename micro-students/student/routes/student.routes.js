const router = require("express").Router();
const StudentController = require("../controllers/student.controller");
const authGuard = require("../../middlewares/authGuard");

router.get("/", authGuard, StudentController.getAllStudents);
router.get("/:id", authGuard, StudentController.getStudentById);
router.post("/", authGuard, StudentController.createStudent);
router.delete("/:id", authGuard, StudentController.deleteStudent);
// router.post("/register", StudentController.register);
// router.post("/login", StudentController.login);

module.exports = router;

// teacher-service/index.js
