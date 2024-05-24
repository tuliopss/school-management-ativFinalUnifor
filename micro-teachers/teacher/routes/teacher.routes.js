// const router = require("express").Router();

// const TeacherController = require("../controllers/teacher-controller");

// router.get("/teste", TeacherController.testeMicro);

// module.exports = router;
// teacher-service/routes/teacher-routes.js
const router = require("express").Router();
const TeacherController = require("../controllers/teacher-controller");

router.get("/teste", TeacherController.testeMicro);

module.exports = router;

// teacher-service/index.js
