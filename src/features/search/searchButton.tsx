import { Button } from '../../shared/components/button/button';
import React from 'react';

export const SearchButton = ({
    goToSearchResultsPage,
    query
}: {
    goToSearchResultsPage: () => void,
    query: string
}) => {
    return (
        <Button
            title={
                'start search ' + (query.length > 2 ? '(active)' : '(disabled)')
            }
            cb={goToSearchResultsPage}
            text='Search'
            disabled={query.length < 3}
        />
    );
};
