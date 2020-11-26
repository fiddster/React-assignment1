import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/global.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigationbar } from './components/navigationbar/Navigationbar'
import { Footer } from './components/footer/Footer'

ReactDOM.render(
	<React.StrictMode>
		<Navigationbar />
		<App />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
