import { TextInput } from '../../shared/components/textInput';
import { useLocation } from 'react-router';
import {
    getLocalQuery,
    setLocalQuery
} from '../../shared/api/store/services/localStorageApi';
import React, {
    type ChangeEvent,
    memo,
    type RefObject,
    useEffect
} from 'react';

export const UnmemoizedSearchInput = ({
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
    const location = useLocation();
    const { state } = location;
    const searchQuery = state?.query || getLocalQuery();
    useEffect(() => {
        if (searchQuery) {
            setQuery(() => searchQuery);
        }
    }, [searchQuery, setQuery]);
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setQuery(() => target.value);
        setLocalQuery(target.value);
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
                    if (
                        !searchResultsRef?.current?.classList.contains('hidden')
                    ) {
                        searchResultsRef?.current?.classList.toggle('hidden');
                    }
                }, 300);
            }}
            label=''
            autocomplete='off'
        />
    );
};

export const SearchInput = memo(UnmemoizedSearchInput);
