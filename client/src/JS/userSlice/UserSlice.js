import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getusers = createAsyncThunk("users/getU", async () => {
  try {
    const result = await axios.get("http://localhost:5000/users/");
    return result.data;
  } catch (error) {}
});

export const addusers = createAsyncThunk("users/add", async (user) => {
  try {
    const result = await axios.post("http://localhost:5000/users/", user);
    return result.data;
  } catch (error) {}
});

export const deleteusers = createAsyncThunk("users/dalete", async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/users/${id}`);
    return result.data;
  } catch (error) {}
});

export const updateusers = createAsyncThunk(
  "users/dalete",
  async ({ id, user }) => {
    try {
      const result = await axios.put(`http://localhost:5000/users/${id}`, user);
      return result.data;
    } catch (error) {}
  }
);

const initialState = {
  users: [],
  status: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getusers.pending]: (state) => {
      state.status = "pending";
    },
    [getusers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.respond;
    },
    [getusers.rejected]: (state) => {
      state.status = "fail";
    },
    [addusers.pending]: (state) => {
      state.status = "pending";
    },
    [addusers.fulfilled]: (state) => {
      state.status = "success";
    },
    [addusers.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteusers.pending]: (state) => {
      state.status = "pending";
    },
    [deleteusers.fulfilled]: (state) => {
      state.status = "success";
    },
    [deleteusers.rejected]: (state) => {
      state.status = "fail";
    },
    [updateusers.pending]: (state) => {
      state.status = "pending";
    },
    [updateusers.fulfilled]: (state) => {
      state.status = "success";
    },
    [updateusers.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
