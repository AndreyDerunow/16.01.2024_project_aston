import { type AddFileInputProps, type TargetImgData } from '../types/ui';
import React, { type ChangeEvent, memo } from 'react';

const UnmemoizedAddFileInput = ({
    onChange,
    value,
    id,
    name,
    label
}: AddFileInputProps) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (!target.files || target.files.length === 0) {
            return;
        }
        const file = target.files[0];
        const img = window.URL.createObjectURL(file).toString();
        if (name) {
            const imgData: { target: TargetImgData } = {
                target: { name, value: file, img }
            };
            return onChange(imgData);
        }
    };
    return (
        <div className='text-warmGray-50 p-2 m-2 z-[1] w-full max-w-[400px] mx-auto '>
            <label className='pb-4 flex justify-start flex-col' htmlFor={id}>
                {label}
                <div
                    style={{ backgroundImage: `url(${value})` }}
                    className='mx-auto bg-contain bg-no-repeat bg-center w-40 h-40 flex justify-center items-center text-warmGray-50 text-4xl border border-warmGray-50 rounded-sm cursor-pointer'
                >
                    {value ? '' : '+'}
                </div>
            </label>
            <input
                className='hidden'
                accept='image/*'
                onChange={e => handleChange(e)}
                type='file'
                name={name}
                id={id}
            />
        </div>
    );
};
export const AddFileInput = memo(UnmemoizedAddFileInput);
