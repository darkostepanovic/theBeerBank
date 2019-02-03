import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme';

import App from "./components/App";
import GlobalStyle from './utils/global'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle/>
                    <App/>
                </>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
document.querySelector("#root"));