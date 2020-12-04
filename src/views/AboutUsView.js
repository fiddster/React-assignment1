import React from 'react'

import '../styles/aboutus.scss'
import AboutUsImage from '../shared/media/images/aboutus.jpg'

export const AboutUsView = () => {
	return (
		<div className="content-container">
			<span className="title">Keep it light</span>
			<div className="container-50-50">
				<img src={AboutUsImage} alt="" className="content-left" />
				<ul className="content-right display-box big-list">
					<li className="big-list-item">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</li>
					<li className="big-list-item">
						Similique eos voluptas officia nesciunt, neque, voluptate blanditiis rem eum quos veniam,
					</li>
					<li className="big-list-item">
						Eligendi possimus quidem aperiam assumenda ipsam. Recusandae necessitatibus nostrum nulla?
					</li>
				</ul>
			</div>
		</div>
	)
}
