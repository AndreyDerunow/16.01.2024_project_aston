import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type NavigateFunction } from 'react-router';
import { type QueryAnswer } from '../../entities/Joke/types/jokes';

import { type Result } from '../../entities/Joke/types/jokes';
import { type SerializedError } from '@reduxjs/toolkit';

import {
    type ChangeEvent,
    type HTMLAttributes,
    type MouseEvent,
    type RefObject
} from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    cb: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    text: string;
    disabled: boolean;
    img?: string;
    classes?: string;
}

export interface InputProps {
    reference?: RefObject<HTMLInputElement>;
    placeholder?: string;
    autocomplete?: 'off';
    name: string;
    label: string;
    id: string;
    value: string;
    error?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange: (target: ChangeEvent<HTMLInputElement>) => void;
}
export interface AddFileInputProps {
    onChange: (arg: { target: TargetImgData }) => void;
    value: string;
    id: string;
    name: string;
    label: string;
}
interface RadioInputOption {
    name: string;
    value: string;
}
export interface RadioInputProps extends InputProps {
    options: RadioInputOption[];
}

export interface ReturnedDataProps {
    error: FetchBaseQueryError | SerializedError | undefined;
    data: QueryAnswer | undefined;
    isLoading: boolean;
    reference?: RefObject<HTMLDivElement>;
    query: string;
}

export interface TargetImgData {
    name: string;
    value: File;
    img: string;
}
export interface DataCardProps extends Result {
    onClick: (jokeId: string) => void;
    isFavorite: boolean;
    navigate: NavigateFunction;
}

export interface ThemeContext {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export interface ErrorObj {
    message: string;
}
