import { type ButtonProps } from '../../types/ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const Button = ({
    cb,
    text,
    img,
    disabled,
    id,
    classes,
    title
}: ButtonProps) => {
    const { theme } = useTheme();
    const btnClasses = classNames({
        'text-center mx-2 p-1': true,
        'border-white': theme === 'dark',
        'border-black': theme === 'light',
        'hover:-rotate-2': !disabled,
        'opacity-30': disabled,
        [`${classes}`]: classes !== undefined
    });
    return (
        <button
            title={title}
            id={id}
            disabled={disabled}
            className={btnClasses}
            onClick={a => {
                cb(a);
            }}
        >
            {img && <img src={img} />}
            {text && text}
        </button>
    );
};

Button.propTypes = {
    cb: PropTypes.func.isRequired,
    text: PropTypes.string,
    img: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    classes: PropTypes.string,
    title: PropTypes.string
};
