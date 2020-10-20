import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes';
import './index.css';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN; 
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
			<ThemeProvider theme={theme}>
		<Auth0Provider
			domain="dev-qe0z03pk.us.auth0.com"
			clientId="GiuYvhVQ5MIHG82yF6CvQweui2XcJVCZ"
			redirectUri={'http://tt72-anyfit.herokuapp.com'}>
				<Routes />
				<App />
		</Auth0Provider>
			</ThemeProvider>
	,
	document.getElementById('root')
);
