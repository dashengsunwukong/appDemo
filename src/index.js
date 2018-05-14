import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import './config.js';
import reducers from './reducer'
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/AuthRoute/authRoute';

//检测浏览器是否支持window.devToolsExtension，调试工具
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {};
const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        reduxDevtools
    ));
function Boss(){
    return (
        <h1>BOss页面</h1>
    )
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/boss" component={Boss} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div> 
        </BrowserRouter>
    </Provider>)
, document.getElementById('root')); 