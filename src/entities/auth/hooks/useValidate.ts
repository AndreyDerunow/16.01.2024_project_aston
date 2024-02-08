import { type Errors, type LoginData, type RegisterData } from '../types/auth';
import { object, string } from 'yup';
import { useCallback, useEffect, useMemo } from 'react';

export const useValidate = (
    data: RegisterData | LoginData,
    setErrors: React.Dispatch<React.SetStateAction<Errors>>
) => {
    const validateSсhema = useMemo(
        () =>
            object({
                password: string()
                    .required('Password is required')
                    .matches(
                        /(?=.*[A-Z])/,
                        'Password should contain at least one capital letter'
                    )
                    .matches(
                        /(?=.*[0-9])/,
                        'Password should contain at least one number'
                    )
                    .matches(
                        /(?=.{8,})/,
                        'Password should be at least 8 characters long'
                    ),
                email: string()
                    .required('Email is required')
                    .email('Email is incorrect')
            }),
        []
    );
    const validate = useCallback(() => {
        validateSсhema
            .validate(data)
            .then(() => {
                setErrors(() => ({}));
            })
            .catch(e => {
                setErrors((): Errors => ({
                    [e.path]: e.message
                }));
            });
    }, [data, setErrors, validateSсhema]);
    useEffect(() => {
        validate();
    }, [data, validate]);
    return validate;
};
