// import { createStore, combineReducers } from 'redux';

// import cat from './modules/cat';

// const rootReducer = combineReducers({ cat });
// const store = createStore(rootReducer);
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import catReducer from './modules/catSlice';

const store = configureStore({ reducer: { cat: catReducer } });
export default store;
