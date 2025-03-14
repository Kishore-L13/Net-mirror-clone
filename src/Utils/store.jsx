import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import commentSlice from "./commentSlice"

const store = configureStore({
  reducer:{
    app:navSlice,
    search:searchSlice,
    chat: commentSlice
  }
})
export default store