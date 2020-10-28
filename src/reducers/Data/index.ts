import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    data:""
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        action: (state, { payload }: PayloadAction<string> )=>{
            state.data = payload;
        }
    },
});

export const {action} = dataSlice.actions;
export default dataSlice.reducer;