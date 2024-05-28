import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth-service";
import studentService from "../services/student-service";

const initialState = {
  student: {},
  students: [],
  loading: false,
  success: false,
  error: false,
  message: null,
};

export const getStudents = createAsyncThunk(
  "student/get",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await studentService.getStudents(token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   const data = await authService.login(user);

//   if (data.errors) {
//     return thunkAPI.rejectWithValue(data.errors[0]);
//   }

//   return data;
// });

// export const logout = createAsyncThunk("auth/logout", async (req, res) => {
//   await authService.logout();
// });

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.students = action.payload;
      });
  },
});
export const { resetMessage } = studentSlice.actions;
export default studentSlice.reducer;
