const Student = require("../models/student.schema");
// const db = require("../db/conn");
// const jwt = require("jsonwebtoken");
// const Classroom = require("../models/Classroom");
// const Teacher = require("../models/Teacher");
// const jwtSecret = process.env.JWT_SECRET;

module.exports = class StudentController {
  static async createStudent(req, res) {
    const { name, email, age, registration } = req.body;

    const checkEmail = await Student.findOne({ email: email });
    const checkRegistration = await Student.findOne({
      registration: registration,
    });

    if (checkEmail) {
      res.status(404).json({ error: "Email já existente." });
      return;
    }

    if (checkRegistration) {
      res.status(404).json({ error: "Matrícula já cadastrada" });
      return;
    }

    const student = {
      name,
      email,
      age,
      registration,
    };

    try {
      const studentCreated = await Student.create(student);
      res.status(201).json(studentCreated);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Houve um erro. Tente novamente mais tarde." });
    }
  }

  static async getAllStudents(req, res) {
    try {
      const students = await Student.find();

      res.status(200).json(students);
    } catch (error) {
      res
        .status(404)
        .json({ errors: ["Houve um erro, tente novamente mais tarde."] });
    }
  }

  static async deleteStudent(req, res) {
    const id = req.params.id;

    const student = await Student.findById(id);

    if (!student) {
      res.status(404).json({ errors: ["Estudante não encontrado."] });
      return;
    }

    await Student.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Usuário deletado com sucesso." });
  }

  static async getStudentById(req, res) {
    const { id } = req.params;

    try {
      const student = await Student.findById(id);

      if (!student) {
        res.status(400).json({ errors: ["Estudante não encontrado"] });
        return;
      }

      res.status(200).json(student);
    } catch (error) {
      res
        .status(404)
        .json({ errors: ["Houveu um erro, tente novamente mais tarde"] });
    }
  }

  static async updateStudent(req, res) {
    const id = req.params.id;
    const { nome, idade } = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
      res.status(404).json({ errors: ["Estudante não encontrado."] });
      return;
    }

    const updatedStudent = {
      nome,
      idade,
      categoria: StudentController.checkCategory(idade),
    };

    try {
      await Student.update(updatedStudent, { where: { id: id } });

      res.status(200).json({ message: "Estudante atualizado com sucesso." });
    } catch (error) {
      res
        .status(404)
        .json({ errors: ["Houveu um erro, tente novamente mais tarde"] });
    }
  }

  static async studentPresence(req, res) {
    const id = req.params.id;
    const student = await Student.findByPk(id);

    student.presenca = !student.presenca;
    await student.save();
    // await Student.update(student, { where: { id: id } });

    res.status(200).json({ message: "Presença confirmada." });
  }
};
