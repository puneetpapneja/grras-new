import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toastReducer from './reducers/toastSlice';
/* Note: Do Not Put Non-Serializable Values in State or Actions */

const rootReducer = combineReducers({
  toast: toastReducer
});

export const store = configureStore({
  reducer: rootReducer
});
