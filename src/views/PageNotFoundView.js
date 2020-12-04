import React from 'react'

import notFoundImage from '../shared/media/images/notfound.jpg'
import '../styles/notfound.scss'

export const PageNotFoundView = () => {
	return (
		<div className="content-container">
			<span>Not all those who wander are lost... but you are :)</span>
			<span>{"Couldn't find the page you were looking for"}</span>
			<div className="image-container container-30-40-30">
				<img src={notFoundImage} alt="" />
			</div>
		</div>
	)
}
