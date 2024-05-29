import { api, requestConfig } from "../utils/api";

const getStudents = async (token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/student/`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getStudentById = async (token, id) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/student/${id}`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateStudent = async (token, id, student) => {
  const config = requestConfig("PATCH", student, token);
  try {
    const res = await fetch(`${api}/student/${id}`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const createStudent = async (token, student) => {
  const config = requestConfig("POST", student, token);

  try {
    const res = await fetch(`${api}/student/`, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (token, id) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(`${api}/student/${id}`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const studentService = {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
};

export default studentService;
