import { createSlice } from '@reduxjs/toolkit';

export interface GeneralState {
    search: string;
    response: any;
}

const initialState: GeneralState = {
    search: '',
    response: null,
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSearch: (state, action) => { state.search = action.payload },
        setResponse: (state, action) => { state.response = action.payload },
    },
});

export const { setSearch, setResponse } = generalSlice.actions;
export default generalSlice.reducer;