import { apiTeacher, requestConfig } from "../utils/api";

const getStudents = async (token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${apiTeacher}/student/`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const studentService = {
  getStudents,
};

export default studentService;
