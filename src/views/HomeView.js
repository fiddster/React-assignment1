import React from 'react'
import welcomeImage from '../shared/media/images/welcome.jpg'
import '../styles/home.scss'

export const HomeView = () => {
	return (
		<div className="home-wrapper content-container">
			<div className="container-30-40-30">
				<img src={welcomeImage} alt="" className="welcome-image" />
			</div>
		</div>
	)
}