import classNames from 'classnames';
import { type InputProps } from '../types/ui';
import { useTheme } from '../hooks/useTheme';
import React, { memo } from 'react';

const UnmemoizedTextInput = ({
    placeholder,
    name,
    label,
    id,
    onChange,
    value,
    onFocus,
    onBlur,
    reference,
    error,
    autocomplete
}: InputProps) => {
    const { theme } = useTheme();
    const inputClasses = classNames({
        'rounded-md p-2 w-full': true,
        'bg-gray-50 text-black': theme === 'dark',
        'bg-gray-800 text-gray-50': theme === 'light'
    });
    return (
        <div className='p2 m-2 w-full'>
            <label htmlFor={id} className=' mx-2 mb-2'>
                {label}
                <input
                    ref={reference}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    className={inputClasses}
                    placeholder={placeholder}
                    type='text'
                    name={name}
                    id={id}
                    autoComplete={autocomplete}
                />
            </label>
            {error && <div className='text-red-500'>{error}</div>}
        </div>
    );
};

export const TextInput = memo(UnmemoizedTextInput);
