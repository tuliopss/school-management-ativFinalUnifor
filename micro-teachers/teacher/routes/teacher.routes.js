const router = require("express").Router();
const authGuard = require("../../middlewares/authGuard");
const {
  teacherRegisterValidations,
  loginValidation,
} = require("../../middlewares/teacher-validations");
const validate = require("../../middlewares/validate");
const TeacherController = require("../controllers/teacher-controller");
// const authGuard = require("//../middlewares/authGuard");

router.get("/teste", TeacherController.testeMicro);
router.get("/", authGuard, TeacherController.getAllTeachers);
router.get("/profile", authGuard, TeacherController.getCurrentUser);
router.post(
  "/register",
  teacherRegisterValidations(),
  validate,
  TeacherController.register
);
// router.post("/login", TeacherController.login);
router.post("/login", loginValidation(), validate, TeacherController.login);

module.exports = router;

// teacher-service/index.js
