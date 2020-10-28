import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/Data';

const store = configureStore({
    reducer: {
        data: dataReducer,
    }
});

export default store;