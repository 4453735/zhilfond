import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  phone: '',
  about: '',
}

const addCardSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    updateCard(state, action) {
      const payload = action.payload;
      state.name = payload.name || state.name;
      state.email = payload.email || state.email;
      state.phone = payload.phone || state.phone;
      state.about = payload.about || state.about;
    }
  }
})

export const { updateCard } = addCardSlice.actions;
export default addCardSlice.reducer;
