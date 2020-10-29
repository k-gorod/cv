import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: 'lang',
    initialState: "Eng",
    reducers: {
        changeLang: (state, { payload }: PayloadAction<string> )=>{
            return state = payload;
        }
    },
});

export const {changeLang} = dataSlice.actions;
export default dataSlice.reducer;