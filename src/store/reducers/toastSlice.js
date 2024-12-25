import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  caption: '',
  role: '',
  subtitle: '',
  kind: ''
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToastMsg: (state, { payload }) => {
      const { title, caption, role, subtitle, kind } = payload;
      state.title = title;
      state.caption = caption;
      state.role = role;
      state.subtitle = subtitle;
      state.kind = kind;
    }
  }
});

export const { setToastMsg } = toastSlice.actions;
export default toastSlice.reducer;
