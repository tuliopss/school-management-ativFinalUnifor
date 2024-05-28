import { apiTeacher, requestConfig } from "../utils/api";

const register = async (user) => {
  const config = requestConfig("POST", user);
  try {
    const res = await fetch(`${apiTeacher}/teacher/register`, config);
    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const login = async (user) => {
  const config = requestConfig("POST", user);
  console.log("user", user);
  try {
    const res = await fetch(`${apiTeacher}/teacher/login`, config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
