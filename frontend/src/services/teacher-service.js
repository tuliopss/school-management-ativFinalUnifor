import { api, requestConfig } from "../utils/api";

const getTeachers = async (token) => {
  const config = requestConfig("GET", null, token);
  try {
    const res = await fetch(`${api}/teacher/`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async (user, token) => {
  const config = requestConfig("GET", user, token);
  try {
    const res = await fetch(`${api}/teacher/profile`, config);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const teacherService = {
  getTeachers,
  getProfile,
};

export default teacherService;
