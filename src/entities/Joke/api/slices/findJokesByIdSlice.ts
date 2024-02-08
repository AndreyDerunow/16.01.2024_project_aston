import { type AppDispatch } from '../../../../app/store';

import { createSlice } from '@reduxjs/toolkit';
import { getJokeById } from '../services/jokesApi';
import { type RootState } from '../../../../app/store';

const findJokesByIdSlice = createSlice({
    name: 'findJokesById',
    initialState: { isLoading: false, error: [], data: [] },
    reducers: {
        JokesByIdRequested: state => {
            state.isLoading = true;
        },
        JokesByIdRecieved: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        JokesByIdRequestedRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: findJokesByIdReducer, actions } = findJokesByIdSlice;
const {
    JokesByIdRequested,
    JokesByIdRecieved,
    JokesByIdRequestedRequestFailed
} = actions;

export const findJokesByIdFunc =
    (ids: string[]) => async (dispatch: AppDispatch) => {
        dispatch(JokesByIdRequested());
        try {
            const data = await getJokeById(ids);
            dispatch(JokesByIdRecieved(data));
        } catch (error) {
            dispatch(JokesByIdRequestedRequestFailed(error));
        }
    };
export const getJokesById = () => (state: RootState) => state.jokesById.data;
export { findJokesByIdReducer };
