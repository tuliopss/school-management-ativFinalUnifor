import { apiTeacher, requestConfig } from "../utils/api";

const getTeachers = async (token) => {
  const config = requestConfig("GET", null, token);
  try {
    const res = await fetch(`${apiTeacher}/teacher/`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const login = async (user) => {
  const config = requestConfig("POST", user);

  try {
    const res = await fetch(`${apiTeacher}/teacher/login`, config);

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const teacherService = {
  login,
  getTeachers,
  logout,
};

export default teacherService;
