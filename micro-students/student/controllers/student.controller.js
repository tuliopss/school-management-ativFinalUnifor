const Student = require("../models/student.schema");

module.exports = class StudentController {
  static async createStudent(req, res) {
    const { name, email, age, grade, registration } = req.body;

    const checkEmail = await Student.findOne({ email: email });
    const checkRegistration = await Student.findOne({
      registration: registration,
    });

    if (checkEmail) {
      res.status(422).json({ errors: ["Email já existente."] });
      return;
    }

    if (checkRegistration) {
      res.status(422).json({ errors: ["Matrícula já cadastrada"] });
      return;
    }

    const student = {
      name,
      email,
      age,
      grade,
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
      console.log(error);
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

    await Student.findByIdAndDelete({ _id: id });

    res
      .status(200)
      .json({ id: student._id, message: "Usuário deletado com sucesso." });
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
    const { name, age, grade } = req.body;

    const student = await Student.findById(id);

    if (!student) {
      res.status(404).json({ errors: ["Estudante não encontrado."] });
      return;
    }

    const updatedStudent = {
      id,
      name,
      age,
      grade,
    };
    try {
      // console.log(updatedStudent);

      await Student.findByIdAndUpdate(id, updatedStudent);

      res.status(200).json({
        student: updatedStudent,
        message: "Estudante atualizadosd com sucesso.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ errors: ["Houveu um erro, tente novamente mais tarde"] });
    }
  }

  // static async studentPresence(req, res) {
  //   const id = req.params.id;
  //   const student = await Student.findByPk(id);

  //   student.presenca = !student.presenca;
  //   await student.save();
  //   // await Student.update(student, { where: { id: id } });

  //   res.status(200).json({ message: "Presença confirmada." });
  // }
};
