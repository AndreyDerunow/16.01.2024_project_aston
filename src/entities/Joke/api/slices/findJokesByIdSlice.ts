import { type AppDispatch } from '../../../../app/store';

import { createSlice } from '@reduxjs/toolkit';
import { getJokeById } from '../services/jokesApi';
import { type RootState } from '../../../../app/store';

const initialState: {
    isLoading: boolean,
    error: unknown,
    data: Record<string, unknown>[]
} = {
    isLoading: false,
    error: [],
    data: []
};

const findJokesByIdSlice = createSlice({
    name: 'findJokesById',
    initialState: initialState,
    reducers: {
        JokesByIdRequested: state => {
            state.isLoading = true;
        },
        JokesByIdRecieved: (
            state,
            action: { payload: Record<string, unknown>[], type: string }
        ) => {
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
            if (ids.length === 0) {
                dispatch(JokesByIdRecieved([]));
            }
            const data = await getJokeById(ids);
            dispatch(JokesByIdRecieved(data));
        } catch (error) {
            dispatch(JokesByIdRequestedRequestFailed(error));
        }
    };
export const getJokesById = () => (state: RootState) => state.jokesById.data;
export { findJokesByIdReducer };
