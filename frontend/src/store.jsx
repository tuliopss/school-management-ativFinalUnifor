import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth-slice";
import teacherReducer from "./slices/teacher-slice";
import studentReducer from "./slices/student-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teacher: teacherReducer,
    student: studentReducer,
  },
});
