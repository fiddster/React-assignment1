import React from 'react'
import './footer.scss'

export const Footer = () => {
	return (
		<footer>
			<span className="display-box">
				{'Images: '}
				<a href="https://unsplash.com/">Unsplashed</a>
			</span>
			<span className="display-box">
				{'Made By: '}
				<a href="https://github.com/fiddster">Fredrik Andersson</a>
			</span>
		</footer>
	)
}
