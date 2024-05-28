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
    console.log(token);
    const data = await teacherService.getTeachers(token);

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
      });

    //   .addCase(logout.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.error = null;
    //     state.user = null;
    //   })
    //   .addCase(login.pending, (state) => {
    //     state.loading = true;
    //     state.error = false;
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.error = null;
    //     state.user = action.payload;
    //   })
    //   .addCase(login.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //     state.user = null;
    //   });
  },
});
export const { resetMessage } = teacherSlice.actions;
export default teacherSlice.reducer;
