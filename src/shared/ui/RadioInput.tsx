import classNames from 'classnames';
import { type RadioInputProps } from '../types/ui';

import React from 'react';

export const RadioInput = ({
    label,
    options,
    onChange,
    name,
    value
}: RadioInputProps) => {
    return (
        <div className='text-warmGray-50 p2 m-2 w-full z-[1] mx-auto'>
            <label className='block mx-2'>{label}</label>
            <div className='flex justify-center text-center'>
                {options &&
                    options.map(o => (
                        <div key={o.name}>
                            <input
                                className='hidden'
                                type='radio'
                                name={name}
                                value={o.value}
                                checked={o.value === value}
                                id={o.name}
                                onChange={onChange}
                            />
                            <label
                                className={classNames({
                                    'border text-center border-warmGray-50 py-4 text-2xl inline-block w-[90px] cursor-pointer radio transition-all':
                                        true,
                                    'text-green-500 rounded-l-lg':
                                        o.name === 'male',
                                    'text-red-500 rounded-r-lg':
                                        o.name === 'female',
                                    'border-red-500': o.value === value
                                })}
                                htmlFor={o.name}
                            >
                                {o.name}
                            </label>
                        </div>
                    ))}
            </div>
        </div>
    );
};
