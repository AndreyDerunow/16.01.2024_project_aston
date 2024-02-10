import { debounce } from '../../shared/utils/debounce';
import { jokesAPI } from '../../entities/Joke/api/services/jokesApi';
import { Loader } from '../../shared/components/loader/loader';
import { onChangeSearchHistory } from '../../entities/User/utils/onChangeSearchHistory';
import { ReturnedData } from '../../features/search/returnedData';
import { SearchButton } from '../../features/search/searchButton';
import { SearchInput } from '../../features/search/searchInput';
import { useNavigate } from 'react-router';
import { userAPI } from '../../entities/User/api/userApi';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export const Search = () => {
    const [query, setQuery] = useState<string>('');
    const [onSearchQuery, { data, isLoading, error }] =
        jokesAPI.useLazyFindJokeQuery();
    const { data: curUserData, isLoading: isCurUserLoading } =
        userAPI.useGetCurrentUserQuery();
    const [onUpdateUser] = userAPI.useUpdateUserMutation();
    const searchResultsRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (query.length > 2) {
            debounce(query, e => onSearchQuery(e));
        }
    }, [query, onSearchQuery]);
    useEffect(() => {
        document.addEventListener('keydown', handleSearchByEnter);
        return () => removeEventListener('keydown', handleSearchByEnter);
    });
    const goToSearchResultsPage = useCallback((): void => {
        onChangeSearchHistory(
            query,
            onUpdateUser,
            curUserData,
            navigate,
            false
        );
        navigate(`searchResults?query=${query}`, { state: { query } });
    }, [query, curUserData, onUpdateUser, navigate]);

    const handleSearchByEnter = useCallback(
        (e: KeyboardEvent): void => {
            if (query.length > 2 && e.key === 'Enter') {
                if (searchInputRef.current) {
                    searchInputRef.current.blur();
                }
                goToSearchResultsPage();
            }
        },
        [goToSearchResultsPage, query.length]
    );
    if (isCurUserLoading) {
        return <Loader />;
    }
    return (
        <div className='relative w-full mb-10'>
            <div className='flex'>
                <SearchInput
                    query={query}
                    searchResultsRef={searchResultsRef}
                    searchInputRef={searchInputRef}
                    setQuery={setQuery}
                />
                <SearchButton
                    goToSearchResultsPage={goToSearchResultsPage}
                    query={query}
                />
            </div>
            <div
                ref={searchResultsRef}
                className='hidden absolute w-[inherit] max-h-[40vh] overflow-y-scroll scrollbar-none'
            >
                {' '}
                <div className='p-2 m-2'>
                    <div className='w-4/5 rounded-md border-black bg-white border-2'>
                        <ReturnedData
                            query={query}
                            error={error}
                            isLoading={isLoading}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
