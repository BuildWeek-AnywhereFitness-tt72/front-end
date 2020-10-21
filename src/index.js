import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './Routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Login from './Pages/Login/Login.js';
import { registration } from './store/reducers/registerReducer';
import loginReducer from './store/reducers/loginReducer.js';
const store = createStore( loginReducer, applyMiddleware(thunk));

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<Routes />
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);
