const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    registration: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
