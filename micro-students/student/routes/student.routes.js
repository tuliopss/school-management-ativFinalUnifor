const router = require("express").Router();
const StudentController = require("../controllers/student.controller");
const authGuard = require("../../middlewares/authGuard");
const studentCreateValidations = require("../../middlewares/students-validations");
const validate = require("../../middlewares/validate");

router.get("/", authGuard, StudentController.getAllStudents);
router.get("/:id", authGuard, StudentController.getStudentById);
router.post(
  "/",
  authGuard,
  studentCreateValidations(),
  validate,
  StudentController.createStudent
);
router.patch("/:id", authGuard, StudentController.updateStudent);
router.delete("/:id", authGuard, StudentController.deleteStudent);
// router.post("/register", StudentController.register);
// router.post("/login", StudentController.login);

module.exports = router;

// teacher-service/index.js
