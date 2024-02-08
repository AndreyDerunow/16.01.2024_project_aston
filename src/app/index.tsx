import { App } from './App.tsx';

import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store.ts';
import { ThemeProvider } from './hoc/themeProvider.tsx';

import './index.css';

const root = document.getElementById('root');
if (root === null) {
    throw new Error('Root container missing in index.html');
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
