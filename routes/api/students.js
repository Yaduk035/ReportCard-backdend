const express = require("express");
const router = express.Router();
const studentController = require("../students");

router
  .route("/student")
  .get(studentController.getAllStudents)
  .post(studentController.addStudents);

router
  .route("/student/:id")
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
