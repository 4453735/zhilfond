import { configureStore } from "@reduxjs/toolkit";

import addCardSlice from "../slices/addCard.js";

const store = configureStore({
  reducer: {
    card: addCardSlice,
  }
})

export default store;

