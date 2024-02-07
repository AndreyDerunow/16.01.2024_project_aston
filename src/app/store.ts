import { authAPI } from '../entities/auth/api/services/authApi';
import { findJokesByIdReducer } from '../entities/Joke/api/slices/findJokesByIdSlice';
import { jokesAPI } from '../entities/Joke/api/services/jokesApi';
import { userAPI } from '../entities/User/api/userApi';
import { useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    [jokesAPI.reducerPath]: jokesAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    jokesById: findJokesByIdReducer
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            jokesAPI.middleware,
            authAPI.middleware,
            userAPI.middleware
        )
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
