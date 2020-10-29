import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/Data';
import langReducer from '../reducers/Lang';

const store = configureStore({
    reducer: {
        data: dataReducer,
        lang: langReducer
    }
});

export default store;