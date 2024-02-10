import { jokesAPI } from '../../entities/Joke/api/services/jokesApi';
import { Loader } from '../../shared/components/loader/loader';
import React from 'react';
import { UNEXPECTED_ERROR } from '../../shared/constants/constants';

export const Main = () => {
    const { data: joke, isLoading, error } = jokesAPI.useGetRandomJokeQuery();
    if (error) {
        return <div>{UNEXPECTED_ERROR}</div>;
    }
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='w-2/5 mx-auto'>
            {' '}
            <img
                src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
                alt='chuck'
            />
            <div>Random Chuck Norris joke: {joke && joke.value}</div>
        </div>
    );
};
