const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeacherSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    subject: {
      type: String,
      enum: ["Matemática", "História", "Geografia", "Gramática"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
