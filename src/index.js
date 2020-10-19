import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './Routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import theme from "./theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(<ThemeProvider theme={theme}>
	<Routes />
</ThemeProvider>, document.getElementById('root'));
