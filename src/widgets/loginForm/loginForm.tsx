import { authAPI } from '../../entities/auth/api/services/authApi';
import { Button } from '../../shared/components/button/button';
import { Link } from 'react-router-dom';
import { Loader } from '../../shared/components/loader/loader';
import { localStorageAPI } from '../../shared/api/store/services/localStorageApi';
import { TextInput } from '../../shared/components/textInput';
import { useNavigateAfterAuth } from '../../entities/auth/hooks/useNavigateAfterAuth';
import { useValidate } from '../../entities/auth/hooks/useValidate';
import { type Errors, type LoginData } from '../../entities/auth/types/auth';
import {
    isAuthError,
    isAuthResponse
} from '../../entities/auth/types/typeguards/auth';
import React, { type ChangeEvent, useCallback, useMemo, useState } from 'react';

export const LoginForm = () => {
    const [data, setData] = useState<LoginData>({ email: '', password: '' });
    const [errors, setErrors] = useState<Errors>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [onAuth] = authAPI.useSignInMutation();
    const validate = useValidate(data, setErrors);
    const { handleNavigate } = useNavigateAfterAuth();
    const isValid = Object.keys(errors).length === 0;
    const handleChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => {
            setData(prev => ({ ...prev, [target.name]: target.value }));
        },
        []
    );
    const handleSubmit = async () => {
        validate();
        if (!isValid) {
            return;
        }
        setIsLoading(() => true);

        const res = await onAuth({
            ...data,
            returnSecureToken: true
        });
        setIsLoading(() => false);

        if (isAuthResponse(res)) {
            localStorageAPI.setTokens(res);
            handleNavigate();
        } else if (isAuthError(res)) {
            setErrors(() => ({ auth: res.error.data.error.message }));
        }
    };
    return (
        <div>
            <form>
                <TextInput
                    onChange={handleChange}
                    value={useMemo(() => data.email, [data.email])}
                    placeholder='type ur email'
                    name='email'
                    id='email'
                    label='Email:'
                    error={useMemo(() => errors.email, [errors.email])}
                />
                <TextInput
                    onChange={handleChange}
                    value={useMemo(() => data.password, [data.password])}
                    placeholder='type ur pass'
                    name='password'
                    id='password'
                    label='Password:'
                    error={useMemo(() => errors.password, [errors.password])}
                />
            </form>
            {isLoading && <Loader />}
            {errors.auth && <div className='text-red-500'>{errors.auth}</div>}
            <Button
                title={'submit form ' + (isValid ? '(active)' : '(disabled)')}
                text='Submit'
                cb={handleSubmit}
                disabled={!isValid}
            />
            <div>
                Dont have account?
                <Link
                    className='inline-block text-center mx-2 p-1 hover:-rotate-2'
                    to={'/register'}
                >
                    Login
                </Link>
            </div>
        </div>
    );
};
