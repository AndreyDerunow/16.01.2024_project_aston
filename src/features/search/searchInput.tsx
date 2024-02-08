import { TextInput } from '../../shared/components/textInput';
import { useLocation } from 'react-router';
import React, { type ChangeEvent, type RefObject, useEffect } from 'react';

export const SearchInput = ({
    setQuery,
    searchInputRef,
    query,
    searchResultsRef
}: {
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    query: string,
    searchInputRef: RefObject<HTMLInputElement>,
    searchResultsRef: RefObject<HTMLDivElement>
}) => {
    const { state } = useLocation();
    useEffect(() => {
        if (state?.query) {
            setQuery(() => state.query);
        }
    }, [state?.query]);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setQuery(() => target.value);
    };
    return (
        <TextInput
            reference={searchInputRef}
            name='search'
            id='search'
            placeholder='Search'
            value={query}
            onChange={handleChange}
            onFocus={() => {
                searchResultsRef?.current?.classList.toggle('hidden');
            }}
            onBlur={() => {
                setTimeout(() => {
                    searchResultsRef?.current?.classList.toggle('hidden');
                }, 300);
            }}
            label=''
            autocomplete='off'
        />
    );
};
