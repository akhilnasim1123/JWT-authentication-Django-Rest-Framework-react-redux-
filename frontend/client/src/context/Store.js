import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import Swal from "sweetalert2";


export const getAdmin = createAsyncThunk(
  "users/me",
  async (Token, thunkAPI) => {
    console.log("helllo");
    try {
      console.log("heooooo");
      const res = await fetch("http://127.0.0.1:8000/api/users/me", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${Token}`,
        },
      });

      console.log("helllo");
      console.log(res);

      const data = await res.json();
      console.log(data);
      console.log(data.all_user);
      if (res.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const adminLog = createAsyncThunk(
  "admin/login",
  async ({ email, password }, thunkAPI) => {
    const body = JSON.stringify({
      email,
      password,
    });
    if (email === null || (email === "" && password === null) || email === "") {
      Swal.fire({
        text: "These Fields are Required....!!",
        icon: "error",
      });
      return thunkAPI.rejectWithValue();
    } else if (email === null || email === "") {
      Swal.fire({
        text: "Email is Required....!!",
        icon: "error",
      });
      return thunkAPI.rejectWithValue();
    } else if (password == null || password == "") {
      Swal.fire({
        text: "Password is Required....!!",
        icon: "error",
      });
      console.log("failed");
      return thunkAPI.rejectWithValue();
    } else if (email !== null && email !== "admin@gmail.com") {
      Swal.fire({
        text: "Only admin can access!!",
        icon: "error",
      });
      console.log("failed");
      return thunkAPI.rejectWithValue();
    } else {
      try {
        const res = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body,
        });
        console.log(res);

        const data = await res.json();

        if (res.status === 200) {
          const { dispatch } = thunkAPI;

          dispatch(getAdmin(data.access));

          return data;
        } else {
          Swal.fire({
            text: res.statusText,
            icon: "error",
          });
          return thunkAPI.rejectWithValue(data);
        }
      } catch (err) {
        Swal.fire({
          text: err.response.data,
          icon: "error",
        });
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  }
);

export const UsersDetails = createAsyncThunk(
  "users/",
  async (setUserDetails, thunkAPI) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/users/user-data", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(res, "heyu");
      const data = await res.json();
      // console.log(data);
      if (res.status === 200) {
        console.log("everything is ok");
        setUserDetails(data);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const BlockUser = createAsyncThunk(
  "user/block",
  async (email, thunkAPI) => {
    console.log(email);
    const body = JSON.stringify(email);
    console.log(email);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/users/Block", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      console.log(res, "heyu");
      const data = await res.json();
      if (res.status === 200) {
        console.log("everything is ok");
        console.log(data);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const adminLogout = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const DeleteUser = createAsyncThunk(
  "user/Delete",
  async (email, thunkAPI) => {
    console.log(email);
    const body = JSON.stringify(email);
    console.log(email);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/users/delete", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      console.log(res, "heyu");
      const data = await res.json();
      if (res.status === 200) {
        console.log("everything is ok");
        console.log(data);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchData = createAsyncThunk(
  "user/search",
  async (search, thunkAPI) => {
    const body = JSON.stringify(search);
    console.log(search);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/users/search", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      console.log(res, "heyu");
      const data = await res.json();
      if (res.status === 200) {
        console.log("everything is ok");
        console.log(data);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const BlockUser =(email,setUserDetails)=>{
// 	const body = JSON.stringify(email);

// 	const res =fetch('http://127.0.0.1:8000/api/users/Block',{
// 		                method:'POST',
// 		                headers:{
// 		                    Accept: 'application/json',
// 		                    'Content-Type': 'application/json',
// 		                },
// 						body
// 		            }).then((serverPromise) =>serverPromise.json()
// 					  .then((j) => console.log(j))
// 					  .catch((e) => console.log(e))
// 					)
// 				  .catch((e) => console.log(e));
// 				console.log(e)
// 				return e
// 								// console.log(res,'heyu');
//             // const data =res.json()
//             // if (res.status === 200){
//             //     console.log('everything is ok');
// 			// 	console.log(data)
//             //     return data
//             // }
// 			// else{
// 			// 	return null
// 			// }
// }

// export const adminLogout=createAsyncThunk(
// 	'user/admin/Logout',
// 	async(_,thunkAPI)=>{
// 	console.log('admin logouted')
//     })

const initialState = {
  isAdminAuthenticated: false,
  admin: null,
  loading: false,
  registered: false,
  allUser: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLog.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminLog.fulfilled, (state) => {
        state.loading = false;
        state.isAdminAuthenticated = true;
      })
      .addCase(adminLog.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.isAdminAuthenticated = true;
      })
      .addCase(getAdmin.rejected, (state) => {
        state.loading = false;
      })
      .addCase(UsersDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(UsersDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.allUser = action.payload;
      })
      .addCase(UsersDetails.rejected, (state) => {
        state.loading = false;
      })
      .addCase(adminLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.isAdminAuthenticated = false;
        state.admin = null;
      })
      .addCase(adminLogout.rejected, (state) => {
        state.loading = false;
      });
    // .addCase(BlockUser.pending, state => {
    // 	state.loading = true;
    // })
    // .addCase(BlockUser.fulfilled, (state, action) => {
    // 	state.loading = false;
    // 	state.allUser = action.payload;
    // })
    // .addCase(BlockUser.rejected, state => {
    // 	state.loading = false;
    // })
  },
});
export const { resetRegistered } = adminSlice.actions;
export default adminSlice.reducer;
