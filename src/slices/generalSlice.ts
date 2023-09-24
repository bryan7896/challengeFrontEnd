import { createSlice } from '@reduxjs/toolkit';
import { servicesApi } from '../api/services';
import { GeneralState } from './generalSlice.types';

const initialState: GeneralState = {
    search: '',
    petsList: [],
    details: undefined,
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSearch: (state, { payload }) => {
            state.search = payload;
        },
        setPetsList: (state, { payload }) => {
            state.petsList = payload;
        },
        setDetails: (state, { payload }) => {
            state.details = payload;
        },
    },
    extraReducers(builder) {
        builder.addMatcher(servicesApi.endpoints.pets.matchFulfilled, (state, { payload }) => {
            state.petsList = payload ?? []
        })
    },
});

export const { setSearch, setPetsList, setDetails } = generalSlice.actions;
export default generalSlice.reducer;