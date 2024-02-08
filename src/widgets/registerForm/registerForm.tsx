import { AddFileInput } from '../../shared/components/addFileInput';
import { authAPI } from '../../entities/auth/api/services/authApi';
import { Button } from '../../shared/components/button/button';
import { isTargetImgData } from '../../shared/types/typeguards/imgData';
import { Link } from 'react-router-dom';
import { Loader } from '../../shared/components/loader/loader';
import { onRegisterSuccess } from '../../entities/auth/utils/onAuthSuccess';
import { RadioInput } from '../../shared/components/RadioInput';
import { type TargetImgData } from '../../shared/types/ui';
import { TextInput } from '../../shared/components/textInput';
import { useNavigateAfterAuth } from '../../entities/auth/hooks/useNavigateAfterAuth';
import { userAPI } from '../../entities/User/api/userApi';
import { useValidate } from '../../entities/auth/hooks/useValidate';
import { type Errors, type RegisterData } from '../../entities/auth/types/auth';
import {
    isAuthError,
    isAuthResponse
} from '../../entities/auth/types/typeguards/auth';
import React, { type ChangeEvent, useCallback, useMemo, useState } from 'react';

export const RegisterForm = () => {
    const [data, setData] = useState<RegisterData>({
        email: '',
        password: '',
        image: '',
        sex: 'male'
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({});
    const [image, setImage] = useState<File>();
    const [onAuth] = authAPI.useSignUpMutation();
    const [onCreateUser] = userAPI.useCreateUserMutation();
    const { handleNavigate } = useNavigateAfterAuth();
    const validate = useValidate(data, setErrors);
    const handleChange = useCallback(
        ({
            target
        }: ChangeEvent<HTMLInputElement> | { target: TargetImgData }): void => {
            if (target.name === 'image' && isTargetImgData(target)) {
                setImage(() => target.value);
                setData(prev => ({
                    ...prev,
                    [target.name]: (target as TargetImgData).img
                }));
                return;
            }
            setData(prev => ({ ...prev, [target.name]: target.value }));
        },
        []
    );
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (): Promise<void> => {
        validate();
        if (!isValid) {
            return;
        }
        setIsLoading(() => true);

        const res = await onAuth({
            email: data.email,
            password: data.password,
            returnSecureToken: true
        });
        if (isAuthResponse(res)) {
            await onRegisterSuccess({
                res,
                email: data.email,
                sex: data.sex,
                image,
                createUser: onCreateUser,
                handleNavigate
            });
        } else if (isAuthError(res)) {
            setErrors(() => ({ auth: res.error.data.error.message }));
        }
        setIsLoading(() => false);
    };
    return (
        <>
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
                <RadioInput
                    onChange={handleChange}
                    value={useMemo(() => data.sex, [data.sex])}
                    options={[
                        { name: 'male', value: 'male' },
                        { name: 'female', value: 'female' }
                    ]}
                    name='sex'
                    id='sex'
                    label='Sex:'
                />
                <AddFileInput
                    onChange={handleChange}
                    value={useMemo(() => data.image, [data.image])}
                    name='image'
                    id='image'
                    label='Image:'
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
                already have account?
                <Link
                    className='inline-block text-center mx-2 p-1 hover:-rotate-2'
                    to={'/login'}
                >
                    Register
                </Link>
            </div>
        </>
    );
};
