# Chuck Norris Jokes App

Приложение для поиска шуток о Чаке Норрисе :)

**Использованное API**: [ChuckNorrisApi](https://api.chucknorris.io/).

**Посмотреть проект**: [https://andreyderunow.github.io/16.01.2024_project_aston/](https://andreyderunow.github.io/16.01.2024_project_aston/).

## Для запуска приложения локально нужно сделать следующее:

- Спулить из главной ветки актуальную версию проекта
- Добавить в корень .env файл
- Ввести необходимые комманды в консоль

```javascript
npm install
npm run dev
```

**Основной функционал**:

> - **Регистрация и авторизация:** пользователи могут создать учетную запись и авторизоваться в приложении.
> - **Поиск шуток:** приложение предоставляет возможность поиска шуток по слову/части слова.
> - **Избранные шутки:** пользователи могут добавлять шутки в избранное, чтобы собрать свою коллекцию.
> - **История поиска:** приложение сохраняет историю поиска.

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **Firebase**

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**

- [x] Есть **рендеринг списков** |
      [FavoritesList](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/widgets/favoritesList/favoritesList.tsx),
      [SearchResult](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/widgets/searchResults/searchResults.tsx),
      [SearchHistory](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/widgets/searchHistory/searchHistory.tsx),
      [NavBar](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/features/nav/navBar.tsx),
      etc.

- [x] Реализована хотя бы одна **форма** |
      [RegisterForm](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/widgets/registerForm/registerForm.tsx)
      [LoginForm](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/widgets/loginForm/loginForm.tsx)

- [x] Есть применение Контекст API |
      [ThemeProvider](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/app/hoc/themeProvider.tsx)

- [x] Есть применение **предохранителя** |
      [ErrorFallback](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/pages/Error/ErrorFallback.tsx)

- [x] Есть хотя бы один **кастомный хук** |
      [useTheme](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/shared/hooks/useTheme.ts),
      [useValidate](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/auth/hooks/useValidate.ts),
      [useNavigateAfterAuth](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/auth/hooks/useNavigateAfterAuth.ts)

- [x] Хотя бы несколько компонентов используют **PropTypes** |
      [RequireAuth](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/app/hoc/requireAuth.tsx),
      [PartialDataJokeCard](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/features/jokeCard/partialDataJokeCard.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) |
      утилита [debounce](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/shared/utils/debounce.ts) использована в компоненте [Search](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/widgets/search/search.tsx).

- [x] Есть применение lazy + Suspense:
      [LazyComponents]([добавить](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/pages/LazyPagex.ts)).

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**
- [x] Используем **слайсы** |
      [findJokesByIdSlice](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/Joke/api/slices/findJokesByIdSlice.ts)

- [x] Есть хотя бы одна **кастомная мидлвара** или **createListenerMiddleware** |
      [findJokesByIdSlice](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/Joke/api/slices/findJokesByIdSlice.ts). 

- [x] Используется **RTK Query** |
      [jokesApi](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/Joke/api/services/jokesApi.ts),
      [authApi](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/auth/api/services/authApi.ts),
      [userApi](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/User/api/userApi.ts)

- [x] Используется **Transforming Responses** |
      [userApi](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/User/api/userApi.ts),

### **2 уровень (необязательный)**

- [x] Использование **TypeScript**
- [x] Подключен **storybook** и созданы два, три сториса ~~с knobs~~, которые показывают разные состояния компонента |
     [Button](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/shared/components/button/button.stories.tsx),
     [Loader](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/shared/components/loader/loader.stories.tsx).

- [x] Использование Firebase для учетных записей:
      [userApi](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/src/entities/User/api/userApi.ts), для обращение к базе данных юзера и картинкам профилей юзера используется Realtime database и Storage.

- [ ] ~~**Низная связанность клиентского кода**, использующего апи кода, работающего с внешним стором~~

- [x] Настроен CI-CD: [ci-cd.yml](https://github.com/AndreyDerunow/16.01.2024_project_aston/blob/main/.github/workflows/ci-cd.yml)

- [ ] ~~Реализована **виртуализация списков**~~

- [ ] ~~Используются **мемоизированные селекторы** (createSelector)~~
- [ ] ~~Используется **нормализованная структура стейта** (createEntityAdapter)~~
- [ ] ~~Проведена **оптимизация приложения**~~

- [ ] ~~Feature Flags. Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом.~~

- [ ] ~~Добавить **тесты** через jest, react-testing-library или Playwright~~
      в планах

- [ ] ~~Связь UI и бизнес-логики построена не через команды, а через **события**~~
- [ ] ~~**Project Console API**~~

## **Дополнительно**

- Приложение построено согласно архитектуре [Feature-Sliced Design](https://feature-sliced.design/ru/)
- Валидация форм происходит при помощи [Yup](https://www.npmjs.com/package/yup)
- Для стилизации использован [tailwindCSS](https://tailwindcss.com/)
