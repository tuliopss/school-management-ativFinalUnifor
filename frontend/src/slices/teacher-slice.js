import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth-service";
import teacherService from "../services/teacher-service";

const initialState = {
  teacher: {},
  teachers: [],
  loading: false,
  success: false,
  error: false,
  message: null,
};

export const getTeachers = createAsyncThunk(
  "teacher/get",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await teacherService.getTeachers(token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const getProfile = createAsyncThunk(
  "teacher/profile",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await teacherService.getProfile(user, token);

    return data;
  }
);

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.teachers = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.teacher = action.payload;
      });
  },
});
export const { resetMessage } = teacherSlice.actions;
export default teacherSlice.reducer;
