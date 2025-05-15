import { createSlice } from "@reduxjs/toolkit";


const alertSlice = createSlice({
    name: "alert",
    initialState : {message:"", color:"", status: false},
    reducers:{
        showAlert(state, action){
            state.message = action.payload.message, 
            state.color = action.payload.color,
            state.status = action.payload.status
        },

        closeAlert(state, action){
            state.status = action.payload.status
        }
    }
})

export const {showAlert, closeAlert} =  alertSlice.actions
export const alertReducer = alertSlice.reducer


// src/features/alertSlice.js





// import { createSlice } from "@reduxjs/toolkit";

// const alertSlice = createSlice({
//   name: "alert",
//   initialState: { message: "", type: "" },
//   reducers: {
//     showAlert: (state, action) => {
//       state.message = action.payload.message;
//       state.type = action.payload.type;
//     },
//     clearAlert: (state) => {
//       state.message = "";
//       state.type = "";
//     },
//   },
// });

// export const { showAlert, clearAlert } = alertSlice.actions;
// export default alertSlice.reducer;
