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
    const token = await thunkAPI.getState().auth.user.token;

    const data = await studentService.getStudents(token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const getStudentById = createAsyncThunk(
  "student/getById",
  async (id, thunkAPI) => {
    const token = await thunkAPI.getState().auth.user.token;

    const data = await studentService.getStudentById(token, id);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const createStudent = createAsyncThunk(
  "student/create",
  async (student, thunkAPI) => {
    const token = await thunkAPI.getState().auth.user.token;
    const data = await studentService.createStudent(token, student);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
export const updateStudent = createAsyncThunk(
  "student/update",
  async (studentData, thunkAPI) => {
    const token = await thunkAPI.getState().auth.user.token;
    const data = await studentService.updateStudent(token, studentData._id, {
      name: studentData.name,
      age: studentData.age,
      grade: studentData.grade,
    });

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const deleteStudent = createAsyncThunk(
  "student/delete",
  async (id, thunkAPI) => {
    const token = await thunkAPI.getState().auth.user.token;
    const data = await studentService.deleteStudent(token, id);

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
      })
      .addCase(getStudentById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getStudentById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.student = action.payload;
      })
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.students.push(action.payload); //CHANGE HERE
        state.message = `Aluno inserido com sucesso!`;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.student = null;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.students = state.students.filter((st) => {
          return st._id !== action.payload.id;
        });
        state.message = action.payload.message;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.student = {};
      })
      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.student = action.payload;
        state.students.map((student) => {
          if (student._id === action.payload.id) {
            console.log("student e pay", action.payload.student);
            return { ...student, ...action.payload.student };
          }

          return student;
        });
        state.message = action.payload.message;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.student = {};
      });
  },
});
export const { resetMessage } = studentSlice.actions;
export default studentSlice.reducer;
