import { lazily } from 'react-lazily';

export const { Info: LazyInfo } = lazily(() => import('./Info/infoPage'));
export const { LoginPage: LazyLoginPage } = lazily(
    () => import('./Login/loginPage')
);
export const { JokeCard: LazyJokeCard } = lazily(
    () => import('../features/jokeCard/jokeCard')
);
export const { FavoritesPage: LazyFavoritesPage } = lazily(
    () => import('./Favorites/favoritesPage')
);
export const { RegisterPage: LazyRegisterPage } = lazily(
    () => import('./Register/registerPage')
);
export const { SearchHistoryPage: LazySearchHistoryPage } = lazily(
    () => import('./SerachHistory/searchHistoryPage')
);
export const { SearchResultsPage: LazySearchResultsPage } = lazily(
    () => import('./SearchResults/searchResultsPage')
);
