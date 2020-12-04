import React from 'react'
import { Routes } from './routes/Routes'
import { Navigationbar } from './components/navigationbar/Navigationbar'
import { Footer } from './components/footer/Footer'

import './styles/App.css';

function App() {
	return (
		<>
			<Routes>
				<Navigationbar />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
